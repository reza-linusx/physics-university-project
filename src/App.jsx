// React libraries
import React from "react";

// Layouts & content
import Sidebar from "./components/layout/Sidebar";
import DefinitionPanel from "./components/layout/DefinitionPanel";
import Content from "./components/layout/Content";

// whiteboards
import MainWhiteboard from "./components/MainWhiteboard";
import OverlayWhiteboard from "./components/OverlayWhiteboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex relative">
      <Sidebar />
      <div className="flex-1 relative p-5 max-w-screen h-screen overflow-hidden">
        <OverlayWhiteboard />
        <Content />
      </div>
      <DefinitionPanel />
    </div>
  );
}

export default App;
