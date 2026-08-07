import React, { useContext } from "react";
import GlobeView from "./components/GlobeView";
import PlatinumView from "./components/PlatinumView";
import { ViewContext } from "./context/ViewContext";
import Sidebar from "./components/layout/Sidebar";
import RepeatingWaveView from "./components/RepeatingWaveView";
import Whiteboard from "./components/Whiteboard";
import InfoPanel from "./components/layout/InfoPanel";
import { DEFINITIONS } from "./utils/constants";

function App() {
  const { view, overlayActivated } = useContext(ViewContext);
  console.log(DEFINITIONS[view].title);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex relative">
      <Sidebar />
      <div className="flex-1 relative p-5 z-10 max-w-screen h-screen overflow-hidden">
        <div className={`absolute inset-0 ${overlayActivated ? "z-30" : ""} `}>
          <Whiteboard transparent hideUi={!overlayActivated} />
        </div>

        <div className="absolute inset-0 rounded-lg">
          {view === "globe" && <GlobeView />}
          {view === "platinumBar" && <PlatinumView />}
          {view === "wave" && <RepeatingWaveView />}
          {view === "light" && (
            <div className="w-full h-full flex items-center justify-center text-2xl">
              <h1>تعریف بر اساس سرعت نور</h1>
            </div>
          )}
        </div>

        <div
          className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
            view === "whiteboard" ? "absolute" : "hidden"
          }`}
        >
          <Whiteboard />
        </div>
      </div>

      {view !== "whiteboard" && (
        <InfoPanel
          title={DEFINITIONS[view].title}
          description={DEFINITIONS[view].content}
        />
      )}
    </div>
  );
}

export default App;
