"use client";

import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/HOC/WindowWrapper";
import { Check } from "lucide-react";

const techStack = [
  {
    category: "Programming Languages",
    items: ["Python", "C", "C++", "C#", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "WebSockets",
      "WebRTC",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Hono",
      "REST APIs",
      "JWT Authentication",
      "OAuth",
      "Razorpay Integration",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "NeonDB",
      "Redis",
      "Prisma",
      "DB Optimization",
    ],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Regression",
      "Supervised Learning",
      "Unsupervised Learning",
      "Regular Expressions (Regex)",
      "LangChain",
      "LangGraph",
      "LangServe",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "MongoDB Compass",
      "Jupyter Notebook",
      "ImageKit",
      "Inngest",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Leadership",
      "Teamwork",
      "Public Speaking",
      "Writing",
      "Event Management",
    ],
  },
];

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControl target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@Karan %</span>
          show tech stack
        </p>

        <div className="my-2 mx-6 grid grid-cols-[180px_1fr] items-start font-mono text-sm text-neutral-500">
          <p className="whitespace-nowrap">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="flex flex-col gap-3 font-mono">
          {techStack.map(({ category, items }) => (
            <li
              key={category}
              className="grid grid-cols-[180px_1fr] items-start gap-4"
            >
              <div className="flex items-center gap-2 whitespace-nowrap font-semibold text-green-600">
                <Check size={16} className="text-green-600" />
                <span>{category}</span>
              </div>

              <div className="leading-relaxed text-neutral-900 wrap-break-word">
                {items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < items.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
