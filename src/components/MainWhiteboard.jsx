import React from "react";
import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import Whiteboard from "./Whiteboard";

export default function MainWhiteboard() {
  const { view } = useContext(ViewContext);
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-300 ${
        view === "whiteboard" ? "block" : "hidden"
      }`}
    >
      <Whiteboard perKey={"main"} />
    </div>
  );
}
