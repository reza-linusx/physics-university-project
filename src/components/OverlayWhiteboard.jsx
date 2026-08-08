import React from "react";
import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import Whiteboard from "./Whiteboard";

export default function OverlayWhiteboard() {
  const { view, overlayActivated } = useContext(ViewContext);
  return (
    <div className={`absolute inset-0 ${overlayActivated ? "z-30" : ""} `}>
      <Whiteboard perKey={"overlay"} transparent hideUi={!overlayActivated} />
    </div>
  );
}
