import React, { useState, useContext } from "react";
import GlobeView from "./components/GlobeView";
import PlatinumView from "./components/PlatinumView";
import { ViewContext } from "./context/ViewContext";
import Sidebar from "./components/layout/Sidebar";
import RepeatingWaveView from "./components/RepeatingWaveView";
import Whiteboard from "./components/Whiteboard";

function App() {
  const { view, setView } = useContext(ViewContext);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center p-5 z-10 max-w-screen">
        <div
          className={`${view === "whiteboard" ? "block" : "hidden"} w-full h-full`}
        >
          <Whiteboard />
        </div>

        {view === "globe" && <GlobeView />}
        {view === "platinumBar" && <PlatinumView />}
        {view === "wave" && <RepeatingWaveView />}
        {view === "light" && <h1>تعریف بر اساس سرعت نور</h1>}
      </div>
    </div>
  );
}

export default App;
