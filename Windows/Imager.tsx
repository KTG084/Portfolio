"use client";

import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/HOC/WindowWrapper";
import React from "react";
import Image from "next/image";
import useWindowStore from "@/store/window";

const Imager = () => {
  const { windows } = useWindowStore();

  const data = windows.imgfile?.data;

  if (!data) return null;
  const { name, imageUrl } = data;
  return (
    <>
      <div id="window-header">
        <WindowControl target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className=" overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={name}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Imager, "imgfile");

export default Imager;
