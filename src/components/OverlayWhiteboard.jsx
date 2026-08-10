import React from "react";
import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import Whiteboard from "./Whiteboard";

export default function OverlayWhiteboard() {
  const { overlayActivated } = useContext(ViewContext);
  return (
    <div
      className={`absolute inset-0 ${overlayActivated ? "z-30" : "pointer-events-none"}`}
    >
      <Whiteboard perKey={"overlay"} transparent hideUi={!overlayActivated} />
    </div>
  );
}
