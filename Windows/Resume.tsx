"use client";

import React from "react";
import WindowWrapper from "@/HOC/WindowWrapper";
import WindowControl from "@/components/WindowControl";
import { Download } from "lucide-react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <div className="flex flex-col h-full">
      <div
        id="window-header"
        className="flex items-center justify-between py-2"
      >
        <WindowControl target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="/files/Resume_SDE.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="flex justify-center overflow-auto">
        <Document file="/files/Resume_SDE.pdf">
          <Page
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
            width={500}
          />
        </Document>
      </div>
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;