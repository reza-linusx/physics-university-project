import React from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

function Whiteboard() {
  return (
    <div className="w-full h-full bg-slate-800 rounded-lg overflow-hidden p-1">
      <div className="w-full h-full rounded-lg overflow-hidden">
        <Tldraw />
      </div>
    </div>
  );
}

export default Whiteboard;
