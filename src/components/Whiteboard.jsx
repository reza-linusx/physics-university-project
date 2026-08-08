import React from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import "./whiteboard.css";

function Whiteboard({ perKey, transparent = false, hideUi = false }) {
  const components = transparent ? { Background: () => null } : undefined;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Tldraw persistenceKey={perKey} components={components} hideUi={hideUi} />
    </div>
  );
}

export default Whiteboard;
