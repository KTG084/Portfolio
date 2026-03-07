"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap, Draggable } from "@/lib/gsap";
import uselocationStore from "@/store/location";
import useWindowStore from "@/store/window";

gsap.registerPlugin(Draggable);

type FileItem = {
  id: number;
  name: string;
  icon: string;
  kind: "file";
  fileType: "txt" | "url" | "img" | "fig";
  position: string;
  description?: string[];
  href?: string;
  imageUrl?: string;
};

type FolderItem = {
  id: number;
  name: string;
  icon: string;
  kind: "folder";
  position: React.CSSProperties;
  windowPosition?: string;
  children: FileItem[];
};

const WORK_LOCATION: {
  id: number;
  type: string;
  name: string;
  icon: string;
  kind: string;
  children: FolderItem[];
} = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Hybrid ATS Resume Reviewer",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "2rem", right: "100rem" },
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Hybrid ATS Resume Reviewer.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Hybrid ATS Resume Reviewer is a smart tool that helps students optimize their resumes for on-campus placements.",
            "Instead of manually comparing with job descriptions, it uses AI to analyze keyword matches and provide personalized feedback.",
            "Think of it as a career coach that highlights strengths and suggests improvements—boosting your chances of landing interviews.",
            "Built with Next.js, FastAPI, and LangChain, it features peer-based rankings, regex keyword matching, and GenAI feedback via Gemini, with a scalable backend on NeonDB and Prisma.",
          ],
        },
        {
          id: 2,
          name: "mainer-opal.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mainer-opal.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "hybrid-ats.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    {
      id: 2,
      name: "Media Upload Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "9rem", right: "80rem" },
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Media Upload Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Media Upload Platform is a full-stack application for seamless media sharing.",
            "Instead of waiting for large files to upload, it uses background processing to let users continue browsing.",
            "Think of it like Instagram's upload experience—fast, reliable, and user-friendly.",
            "Built with Next.js 15 and ImageKit, it handles files up to 1GB with instant background uploads, Zod validation, and secure bcrypt + NextAuth authentication.",
          ],
        },
        {
          id: 2,
          name: "authentication-nexr-js.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://authentication-nexr-js.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "media-upload.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },
  ],
};

const Home = () => {
  const { setActiveLocation } = uselocationStore();
  const { openWindow } = useWindowStore();

  const handleOpen = (project: FolderItem) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  const projects: FolderItem[] = WORK_LOCATION.children ?? [];

  return (
    <section id="home" className="relative w-full h-full">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            style={project.position}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpen(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;