import React, { useContext } from "react";
import { ViewContext } from "./context/ViewContext";
import Sidebar from "./components/layout/Sidebar";
import Whiteboard from "./components/Whiteboard";
import Content from "./components/layout/Content";
import DefinitionPanel from "./components/layout/DefinitionPanel";

function App() {
  const { view, overlayActivated } = useContext(ViewContext);
  return (
    <div className="min-h-screen bg-gray-800 text-white flex relative">
      <Sidebar />
      <div className="flex-1 relative p-5 z-10 max-w-screen h-screen overflow-hidden">
        <div className={`absolute inset-0 ${overlayActivated ? "z-30" : ""} `}>
          <Whiteboard transparent hideUi={!overlayActivated} />
        </div>

        <Content view={view} />

        <div
          className={`p-2 absolute inset-0 rounded-lg transition-opacity duration-300 ${
            view === "whiteboard" ? "absolute" : "hidden"
          }`}
        >
          <Whiteboard />
        </div>
      </div>
      <DefinitionPanel />
    </div>
  );
}

export default App;
