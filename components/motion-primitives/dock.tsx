'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'motion/react';
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

const BASE_ICON_SIZE = 40;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 140;
const DEFAULT_PANEL_HEIGHT = 64;

export type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

export type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

export type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

type DockContextType = {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};

const DockContext = createContext<DockContextType | null>(null);

function useDock() {
  const ctx = useContext(DockContext);
  if (!ctx) throw new Error('Dock components must be inside <Dock />');
  return ctx;
}

/* ---------------- Dock ---------------- */

function Dock({
  children,
  className,
  spring = { mass: 0.15, stiffness: 180, damping: 16 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="mx-2 flex max-w-full items-end overflow-x-auto">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        style={{ height: panelHeight }}
        className={cn(
          'mx-auto flex w-fit items-end gap-2 rounded-2xl px-4',
          className
        )}
        role="toolbar"
        aria-label="Application dock"
      >
        <DockContext.Provider
          value={{ mouseX, spring, distance, magnification }}
        >
          {children}
        </DockContext.Provider>
      </motion.div>
    </div>
  );
}

/* ---------------- DockItem ---------------- */

function DockItem({ children, className, onClick }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, distance, magnification, spring } = useDock();

  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (x) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return Infinity;
    return x - (rect.left + rect.width / 2);
  });

  const sizeRaw = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [BASE_ICON_SIZE, magnification, BASE_ICON_SIZE]
  );

  const size = useSpring(sizeRaw, spring);

  // 🔥 baseline lock (macOS behavior)
  const translateY = useTransform(size, (v) => -(v - BASE_ICON_SIZE) / 2);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, y: translateY }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      className={cn(
        'relative flex items-end justify-center',
        className
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement, {
          width: size,
          isHovered,
        })
      )}
    </motion.div>
  );
}

/* ---------------- DockIcon ---------------- */

function DockIcon({ children, className, ...rest }: DockIconProps) {
  const width = (rest as any).width as MotionValue<number>;

  const iconSize = useTransform(width, (v) => v * 0.6);

  return (
    <motion.div
      style={{ width: iconSize, height: iconSize }}
      className={cn(
        'flex items-center justify-center origin-bottom',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- DockLabel ---------------- */

function DockLabel({ children, className, ...rest }: DockLabelProps) {
  const isHovered = (rest as any).isHovered as MotionValue<number>;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = isHovered.on('change', (v) => setVisible(v === 1));
    return () => unsub();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 shadow-sm dark:bg-neutral-800 dark:text-white',
            className
          )}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Dock, DockItem, DockIcon, DockLabel };
