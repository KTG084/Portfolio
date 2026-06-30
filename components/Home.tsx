/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap, Draggable } from "@/lib/gsap";
import uselocationStore from "@/store/location";
import useWindowStore from "@/store/window";
import { CSSProperties } from "react";

gsap.registerPlugin(Draggable);

type FileType = "txt" | "url" | "img" | "fig" | "pdf";

type BaseItem = {
  id: number;
  name: string;
  icon: string;
  kind: "file" | "folder";
  position?: string | CSSProperties;
};

type FileItem = BaseItem & {
  kind: "file";
  fileType: FileType;
  href?: string;
  imageUrl?: string;
  subtitle?: string;
  image?: string;
  description?: string[];
};

type FolderItem = BaseItem & {
  kind: "folder";
  windowPosition?: string;
  children: Array<FileItem | FolderItem>;
};

type WorkLocation = {
  id: number;
  type: string;
  name: string;
  icon: string;
  kind: "folder";
  children: FolderItem[];
};

const WORK_LOCATION: WorkLocation = {
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
    position: { top: "20rem", right: "100rem" },
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
    position: { top: "25rem", right: "80rem" },
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

  {
    id: 3,
    name: "Multimodal RAG Chatbot",
    icon: "/images/folder.png",
    kind: "folder",
    position: { top: "16rem", right: "80rem" },
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
          "Instead of searching through documents manually, you simply ask questions and get accurate, context-aware answers.",
          "Think of it as a research assistant that reads and understands your documents.",
          "Built with FastAPI, LangChain, and Pinecone, it extracts text via OCR (Tesseract), creates embeddings, and uses GPT-4o for natural conversations with per-session history.",
        ],
      },
      {
        id: 2,
        name: "Github Repo",
        icon: "/images/safari.png",
        kind: "file",
        fileType: "url",
        href: "https://github.com/KTG084/multimodalRAG",
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
      
    ],
  },

  {
    id: 4,
    name: "Retail Demand Analysis",
    icon: "/images/folder.png",
    kind: "folder",
    position: { top: "2rem", left: "80rem" },
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
          "Retail Demand Analysis is a data-driven solution for predicting product demand during stockouts.",
          "Instead of relying on guesswork, it uses statistical and machine learning models to forecast demand with over 90% accuracy.",
          "Think of it as a smart inventory assistant that helps retailers minimize lost sales and optimize stock levels.",
          "Built with Python, Pandas, Scikit-learn, and Power BI, it analyzes out-of-stock patterns and provides actionable insights to reduce lost sales.",
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

  {
    id: 5,
    name: "Gamified Leaderboard",
    icon: "/images/folder.png",
    kind: "folder",
    position: { top: "10rem", right: "100rem" },
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
          "Gamified Leaderboard Web App is a real-time ranking platform that engages users with points and leaderboards.",
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

  {
  id: 6,
  name: "Advanced SQL Data Warehouse",
  icon: "/images/folder.png",
  kind: "folder",
  position: { top: "9rem", left: "80rem" },
  windowPosition: "top-[60vh] left-12",
  children: [
    {
      id: 1,
      name: "Project Overview.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 right-10",
      description: [
        "Advanced SQL Data Warehouse is an enterprise-grade analytics platform built using PostgreSQL and modern ETL architecture.",
        "Designed a complete Bronze, Silver, and Gold layer data warehouse to transform raw ERP and CRM datasets into reliable business-ready insights.",
        "Implemented optimized Star Schema models with fact and dimension tables, enabling fast analytical queries and scalable reporting.",
        "Developed advanced SQL analytics including customer segmentation, cohort analysis, customer lifetime value, and product performance dashboards, reducing reporting complexity and improving query performance for large datasets.",
      ],
    },
    {
      id: 2,
      name: "GitHub Repository",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://github.com/KTG084/SQL-Datawarehouse",
      position: "top-20 left-20",
    },
    {
      id: 3,
      name: "warehouse-schema.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/imageDA1.png",
    },
  ],
},


{
  id: 7,
  name: "Swiggy Sales Analysis",
  icon: "/images/folder.png",
  kind: "folder",
  position: { top: "9rem", left: "90rem" },
  windowPosition: "top-[55vh] left-16",
  children: [
    {
      id: 1,
      name: "Project Overview.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 right-10",
      description: [
        "Swiggy Sales Analysis is an end-to-end business intelligence project that transforms raw food delivery data into actionable business insights.",
        "Analyzed over 600,000+ orders across 10 major Indian cities by building scalable ETL pipelines and integrating data into a PostgreSQL data warehouse.",
        "Performed advanced exploratory data analysis (EDA) using Python to identify customer behavior, ordering trends, revenue drivers, and regional performance.",
        "Designed a 7-page interactive Power BI dashboard with star schema modeling, enabling customer retention analysis, revenue optimization, city-wise performance tracking, and executive-level decision making.",
      ],
    },
    {
      id: 2,
      name: "GitHub Repository",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://github.com/KTG084/Swiggy-Sales-Analysis",
      position: "top-20 left-20",
    },
    {
      id: 3,
      name: "PowerBI-Dashboard.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/imageDA2.png",
    },
  ],
},

{
  id: 8,
  name: "Credit Card Transaction Analysis",
  icon: "/images/folder.png",
  kind: "folder",
  position: { top: "17rem", left: "90rem" },
  windowPosition: "top-[58vh] left-10",
  children: [
    {
      id: 1,
      name: "Project Overview.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 right-10",
      description: [
        "Credit Card Transaction Analysis is an interactive business intelligence solution designed to uncover customer spending behavior and transaction trends.",
        "Built a scalable Power BI dashboard integrated with SQL datasets to analyze thousands of credit card transactions across customer demographics and card categories.",
        "Implemented advanced DAX measures and Power Query transformations to calculate real-time KPIs, revenue, transaction volume, customer acquisition, and spending insights.",
        "Developed drill-through dashboards with dynamic filtering, enabling detailed analysis of card-type performance, customer segments, monthly trends, and revenue optimization for business decision-making.",
      ],
    },
    {
      id: 2,
      name: "GitHub Repository",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://github.com/KTG084/Credit-Card-Report",
      position: "top-20 left-20",
    },
    {
      id: 3,
      name: "CreditCard-Dashboard.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/imageDA3.png",
    },
  ],
},

{
  id: 8,
  name: "Blinkit Grocery Sales Analysis",
  icon: "/images/folder.png",
  kind: "folder",
  position: { top: "17rem", left: "100rem" },
  windowPosition: "top-[60vh] left-12",
  children: [
    {
      id: 1,
      name: "Project Overview.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 right-10",
      description: [
        "Blinkit Grocery Sales Analysis is an interactive business intelligence dashboard built entirely in Microsoft Excel.",
        "Developed a KPI-driven dashboard using Pivot Tables, Pivot Charts, Power Query, and dynamic slicers to analyze grocery sales performance across multiple outlets.",
        "Performed outlet-wise sales analysis, item category segmentation, fat-content distribution, and customer rating trends to uncover key business insights.",
        "Designed an executive-friendly dashboard that enables quick decision-making by tracking revenue, sales distribution, outlet performance, and product-level metrics through fully interactive visualizations.",
      ],
    },
    {
      id: 2,
      name: "GitHub Repository",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://github.com/KTG084/Blinkit-Grocery-Sales-Analysis",
      position: "top-20 left-20",
    },
    {
      id: 3,
      name: "Excel Dashboard.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/imageDA3.png",
    },
  ],
},
]
};



const Home = () => {
  const { setActiveLocation } = uselocationStore();
  const { openWindow } = useWindowStore();

  const handleOPen = (project: FolderItem) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  const projects = WORK_LOCATION.children;

  return (
    <section id="home" className="relative w-full h-full">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            style={
              typeof project.position === "object"
                ? project.position
                : undefined
            }
            className={clsx(
              "group folder",
              typeof project.position === "string" ? project.position : null,
              project.windowPosition
            )}
            onClick={() => handleOPen(project)}
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