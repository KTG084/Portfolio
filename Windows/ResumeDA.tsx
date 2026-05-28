/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import WindowWrapper from "@/HOC/WindowWrapper";
import WindowControl from "@/components/WindowControl";
import { Download } from "lucide-react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const ResumeDA = () => {

  const [isMounted, setIsMounted] = useState(false);
    const [PdfComponents, setPdfComponents] = useState<{
      Document: React.ComponentType<any>;
      Page: React.ComponentType<any>;
    } | null>(null);
  
    useEffect(() => {
      import("react-pdf").then((mod) => {
        mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url
        ).toString();
  
        setPdfComponents({
          Document: mod.Document,
          Page: mod.Page,
        });
      });
  
      setIsMounted(true);
    }, []);


  return (
    <div className="flex flex-col h-full">
      <div
        id="window-header"
        className="flex items-center justify-between py-2"
      >
        <WindowControl target="resumeDA" />
        <h2>ResumeDA.pdf</h2>

        <a
          href="/files/ResumeO.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="flex justify-center overflow-auto">
        {isMounted && PdfComponents ? (
          <PdfComponents.Document file="/files/ResumeO.pdf">
            <PdfComponents.Page
              pageNumber={1}
              renderTextLayer
              renderAnnotationLayer
              width={500}
            />
          </PdfComponents.Document>
        ) : (
          <div style={{ width: 500, height: 700 }} />
        )}
      </div>
    </div>
  );
}

const ResumeDAWidow = WindowWrapper(ResumeDA, "resumeDA");

export default ResumeDAWidow;
