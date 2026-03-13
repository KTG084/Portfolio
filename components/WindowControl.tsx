import useWindowStore from "@/store/window";
import React from "react";
type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";


type WindowControlProps = {
  target: WindowKey;
};

const WindowControl = ({ target }: WindowControlProps) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize"/>
      <div className="maximize"/>
    </div>
  );
};

export default WindowControl;
