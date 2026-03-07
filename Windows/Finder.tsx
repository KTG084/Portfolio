"use client";

import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/HOC/WindowWrapper";
import uselocationStore from "@/store/location";
import useWindowStore from "@/store/window";
import clsx from "clsx";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1: Hybrid ATS Resume Reviewer
    {
      id: 1,
      name: "Hybrid ATS Resume Reviewer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
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
            "Hybrid ATS Resume Reviewer is a smart tool that helps students optimize their resumes for on‑campus placements.",
            "Instead of manually comparing with job descriptions, it uses AI to analyze keyword matches and provide personalized feedback.",
            "Think of it as a career coach that highlights strengths and suggests improvements—boosting your chances of landing interviews.",
            "Built with Next.js, FastAPI, and LangChain, it features peer‑based rankings, regex keyword matching, and GenAI feedback via Gemini, with a scalable backend on NeonDB and Prisma.",
          ],
        },
        {
          id: 2,
          name: "hybrid-ats-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
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
        {
          id: 4,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2: Media Upload Platform
    {
      id: 2,
      name: "Media Upload Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
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
            "Media Upload Platform is a full‑stack application for seamless media sharing.",
            "Instead of waiting for large files to upload, it uses background processing to let users continue browsing.",
            "Think of it like Instagram's upload experience—fast, reliable, and user‑friendly.",
            "Built with Next.js 15 and ImageKit, it handles files up to 1GB with instant background uploads, Zod validation, and secure bcrypt + NextAuth authentication.",
          ],
        },
        {
          id: 2,
          name: "media-upload-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
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
        {
          id: 4,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3: Multimodal RAG Chatbot System
    {
      id: 3,
      name: "Multimodal RAG Chatbot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Multimodal RAG Chatbot.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Multimodal RAG Chatbot System is an intelligent assistant that answers questions from uploaded PDFs and images.",
            "Instead of searching through documents manually, you simply ask questions and get accurate, context‑aware answers.",
            "Think of it as a research assistant that reads and understands your documents.",
            "Built with FastAPI, LangChain, and Pinecone, it extracts text via OCR (Tesseract), creates embeddings, and uses GPT‑4o for natural conversations with per‑session history.",
          ],
        },
        {
          id: 2,
          name: "rag-chatbot-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "rag-chatbot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 4,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 4: Retail Demand Analysis
    {
      id: 4,
      name: "Retail Demand Analysis",
      icon: "/images/folder.png",
      kind: "folder",
      position: "bottom-10 left-6",
      windowPosition: "top-[45vh] left-5",
      children: [
        {
          id: 1,
          name: "Retail Demand Analysis.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Retail Demand Analysis is a data‑driven solution for predicting product demand during stockouts.",
            "Instead of relying on guesswork, it uses statistical and machine learning models to forecast demand with over 90% accuracy.",
            "Think of it as a smart inventory assistant that helps retailers minimize lost sales and optimize stock levels.",
            "Built with Python, Pandas, Scikit‑learn, and Power BI, it analyzes out‑of‑stock patterns and provides actionable insights to reduce lost sales.",
          ],
        },
        {
          id: 2,
          name: "retail-demand-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "retail-demand.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
        {
          id: 4,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 5: Gamified Leaderboard Web App
    {
      id: 5,
      name: "Gamified Leaderboard",
      icon: "/images/folder.png",
      kind: "folder",
      position: "bottom-10 right-3",
      windowPosition: "top-[58vh] left-7",
      children: [
        {
          id: 1,
          name: "Gamified Leaderboard.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Gamified Leaderboard Web App is a real‑time ranking platform that engages users with points and leaderboards.",
            "Instead of static leaderboards, it offers live updates and competitive gamification.",
            "Think of it as a scoreboard for your community or event, keeping participants motivated.",
            "Built with Next.js 15 and MongoDB, it features optimized queries with Prisma, reducing load times by 35% and supporting 200+ concurrent users.",
          ],
        },
        {
          id: 2,
          name: "leaderboard-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "leaderboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-5.png",
        },
        {
          id: 4,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 left-5",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I'm Karanjyoti 👋, a builder at heart who loves turning ideas into real, functional web applications.",
        "I work across the stack with TypeScript, Next.js, and Python—and I'm equally comfortable training ML models or debugging database queries at 2AM.",
        "My journey started in civil engineering, but I found my groove in code—building AI tools, hackathon projects, and platforms that solve real problems.",
        "When I'm not coding, you'll find me leading teams at hackathons, diving into generative AI papers, or convincing myself I *definitely* need that new gadget 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

const locations = {
  work: WORK_LOCATION,
  aboult: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = uselocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };
  return (
    <>
      <div id="window-header">
        <WindowControl target="finder" />

        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>
              {Object.values(locations).map((item) => (
                <li
                  key={item.id}
                  className={clsx(
                    item.id === activeLocation.id ? "active" : "not-active",
                  )}
                  onClick={() => {
                    setActiveLocation(item);
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={17}
                    height={17}
                  />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>My Work</h3>
            <ul>
              {locations.work.children.map((item) => (
                <li
                  key={item.id}
                  className={clsx(
                    item.id === activeLocation.id ? "active" : "not-active",
                  )}
                  onClick={() => {
                    setActiveLocation(item);
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={17}
                    height={17}
                  />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <Image src={item.icon} alt={item.name} width={1} height={1} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
