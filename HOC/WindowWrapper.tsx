import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef, ComponentType } from "react";
import { gsap, Draggable } from "@/lib/gsap";

type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

gsap.registerPlugin(Draggable);

const WindowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowKey: WindowKey
) => {
  const Wrapped = (props: P) => {
    const { focusWindow, windows } = useWindowStore();

    const windowState = windows[windowKey];
    const { isOpen, zIndex } = windowState;

    const ref = useRef<HTMLElement | null>(null);
    const prevIsOpenRef = useRef(false);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen && !prevIsOpenRef.current) {
        const padding = 80;
        const maxX = window.innerWidth - el.offsetWidth - padding;
        const maxY = window.innerHeight - el.offsetHeight - padding;

        const randomX = padding + Math.random() * Math.max(0, maxX - padding);
        const randomY = padding + Math.random() * Math.max(0, maxY - padding);

        el.style.top = `${randomY}px`;
        el.style.left = `${randomX}px`;
        el.style.transform = "none";
      }

      el.style.display = isOpen ? "block" : "none";
      prevIsOpenRef.current = isOpen;
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "none"
        }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;