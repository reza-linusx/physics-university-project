import React, { useState } from "react";
import Earth from "../../components/Earth";
import PlatinumView from "../../components/PlatinumView";
import RepeatingWaveView from "../../components/RepeatingWaveView";
import Whiteboard from "../../components/Whiteboard";
import DefinitionDisplay from "../../components/DefinitionDisplay";
import {
  layout,
  button,
  text,
  utility,
  zIndex,
} from "../../utils/lengthStyles";
import { UNIT_TABS, TOP_LEVEL_TABS, DEFINITIONS } from "../../utils/constants";

function Length() {
  const [activeTab, setActiveTab] = useState("earth");
  const [topLevelTab, setTopLevelTab] = useState("length");
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  const toggleDrawing = () => setIsDrawingMode(!isDrawingMode);

  const getTabClass = (isActive) =>
    isActive ? button.active : button.inactive;

  const getDrawingButtonClass = () =>
    isDrawingMode ? button.activeDrawing : button.inactiveDrawing;

  return (
    <div className={layout.container}>
      {/* Top Section - Tabs */}
      <div className={layout.tabContainer}>
        <div className={layout.tabWrapper}>
          {TOP_LEVEL_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTopLevelTab(tab.id)}
              className={`${button.topLevel} ${getTabClass(topLevelTab === tab.id)}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {topLevelTab === "length" && (
          <div className={layout.tabWrapper}>
            {UNIT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${button.unit} ${getTabClass(activeTab === tab.id)}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className={layout.mainContent}>
        {/* Measurement View */}
        <div
          className={layout.lengthView}
          style={{ display: topLevelTab === "length" ? "flex" : "none" }}
        >
          {/* Visual Area - Left */}
          <div className={layout.visualArea}>
            <div
              className={utility.absoluteInset}
              style={{
                zIndex: isDrawingMode ? zIndex.behind : zIndex.onTop,
                pointerEvents: isDrawingMode ? "none" : "auto",
              }}
            >
              {activeTab === "earth" && (
                <Earth controlsEnabled={!isDrawingMode} />
              )}
              {activeTab === "bar" && (
                <PlatinumView controlsEnabled={!isDrawingMode} />
              )}
              {activeTab === "atom" && <RepeatingWaveView />}
              {activeTab === "light" && (
                <div className={utility.flexCenter}>
                  <h1 className={text.lightView}>💡 Light View</h1>
                </div>
              )}
            </div>

            <div className={utility.absoluteInset}>
              <Whiteboard transparent={true} hideUi={!isDrawingMode} />
            </div>

            <button
              onClick={toggleDrawing}
              className={`${button.drawingToggle} ${getDrawingButtonClass()}`}
            >
              {isDrawingMode ? "⛔" : "✏️"}
            </button>
          </div>

          {/* Info Panel - Right */}
          <div className={layout.infoPanel}>
            <h1 className={text.title}>تعریف طول در گذر زمان</h1>

            <div className={utility.flexCol}>
              <DefinitionDisplay
                title={DEFINITIONS[activeTab].title}
                content={DEFINITIONS[activeTab].content}
                note={DEFINITIONS[activeTab].note}
                rtl={DEFINITIONS[activeTab].rtl}
              />
            </div>
          </div>
        </div>

        {/* Whiteboard - Full width */}
        <div
          className={layout.fullWhiteboard}
          style={{ display: topLevelTab === "whiteboard" ? "block" : "none" }}
        >
          <Whiteboard transparent={false} hideUi={false} />
        </div>
      </div>
    </div>
  );
}

export default Length;
