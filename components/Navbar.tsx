/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import dayjs from "dayjs";
import useWindowStore from "@/store/window";

const data = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
  {
    id: 5,
    name: "Resume Data Analyst",
    type: "resumeDA",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "resumeDA"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";
const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav
      className="bg-white/10
backdrop-blur-xl
border-b border-white/15
shadow-lg
shadow-black/20 text-white"
    >
      <div>
        <img
  src="/images/logo.svg"
  alt="logo"
  className="w-5 h-5 brightness-0 invert"
/>
        <p className="font-bold">Karan&apos;s Portfolio</p>
        <ul>
          {data.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type as WindowKey)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover brightness-0 invert" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time className="text-white">
  {dayjs().format("ddd MMM D HH:mm")}
</time>
      </div>
    </nav>
  );
};

export default Navbar;
