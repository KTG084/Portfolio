"use client";

import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/HOC/WindowWrapper";
import Image from "next/image";

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const Contact = () => {
  return (
    <>
      <div id="window-header" className="flex items-center justify-between">
        <WindowControl target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-4 bg-white text-center">
        <Image
          src="/images/adrian.jpg"
          alt="Karan"
          width={160}
          height={160}
          className="mx-auto rounded-full object-cover"
        />

        <h3 className="text-lg font-semibold">Let&apos;s Connect</h3>

        <p className="text-gray-700">
          Let’s join our tech minds and ace our journeys. I&apos;m in.
        </p>

        <div className="flex mx-30">
          <p>+91 6001033234</p>

          <a href="mailto:karancreation1254@gmail.com">
            <p className="text-blue-600 underline">
              karancreation1254@gmail.com
            </p>
          </a>
        </div>

        <ul className="flex justify-center gap-4 pt-4">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className="rounded-lg px-4 py-5"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white"
              >
                <Image src={icon} alt={text} width={20} height={20} className="m-0" />
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
