"use client";

import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/HOC/WindowWrapper";
import { Check } from "lucide-react";

const techStack = [
  {
    category: "Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "C++",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "NextAuth",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
    ],
  },
  {
    category: "Data Analytics",
    items: [
      "Power BI",
      "Excel",
      "DAX",
      "Power Query",
      "ETL",
      "Data Modeling",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "LangChain",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
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
