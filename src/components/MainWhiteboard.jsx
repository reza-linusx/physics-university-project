import React from "react";
import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import Whiteboard from "./Whiteboard";

export default function MainWhiteboard() {
  const { view } = useContext(ViewContext);
  return (
    <div
      className={`p-2 absolute inset-0 rounded-lg transition-opacity duration-300 ${
        view === "whiteboard" ? "absolute" : "hidden"
      }`}
    >
      <Whiteboard perKey={"main"} />
    </div>
  );
}
