"use client";

import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "@/store/window";

type App = {
  id: string;
  name: string;
  icon: string;
  canOpen?: boolean;
};

const dockApps: App[] = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "/images/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Safari",
    icon: "/images/safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "/images/photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "/images/contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "/images/terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "/images/trash.png",
    canOpen: false,
  },
];


export default function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);
  const {openWindow, closeWindow, windows} = useWindowStore();

  useGSAP(() => {
    const dock = dockRef.current;

    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    };

    const resetIcons = () => {
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        }),
      );
    };


    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    }




  }, []);

  const toggleApp = (app) => {

    if(!app.canOpen) return;

    const window = windows[app.id];

    if(window.isOpen) {
      closeWindow(app.id);
    }else{
      openWindow(app.id);
      console.log(windows);
    }


    
  };

  return (
    <section id="dock">
      <div
        ref={dockRef}
        className="
          dock-container  
        "
      >
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image
                src={icon}
                alt={name}
                width={48}
                height={48}
                loading="lazy"
                className={canOpen ? "" : "opacity-100"}
              />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
}
