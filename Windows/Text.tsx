"use client";

import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/HOC/WindowWrapper";
import useWindowStore from "@/store/window";
import Image from "next/image";
import React from "react";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
  return (
    <>
      <div id="window-header">
        <WindowControl target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {image ? (
          <div className="w-fit overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              className="object-cover rounded-full"
            />
          </div>
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
