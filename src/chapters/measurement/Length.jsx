import React, { useState } from "react";
import Earth from "../../components/Earth";
import PlatinumView from "../../components/PlatinumView";
import RepeatingWaveView from "../../components/RepeatingWaveView";
import Whiteboard from "../../components/Whiteboard";
import DefinitionDisplay from "../../components/DefinitionDisplay";
import {
  LAYOUT,
  BUTTON,
  TEXT,
  UTILITY,
  Z_INDEX,
} from "../../utils/lengthStyles";
import { UNIT_TABS, TOP_LEVEL_TABS, DEFINITIONS } from "../../utils/constants";

function Length() {
  const [activeTab, setActiveTab] = useState("earth");
  const [topLevelTab, setTopLevelTab] = useState("measurement");
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  const toggleDrawing = () => setIsDrawingMode(!isDrawingMode);

  const getTabClass = (isActive) =>
    isActive ? BUTTON.ACTIVE : BUTTON.INACTIVE;

  const getDrawingButtonClass = () =>
    isDrawingMode ? BUTTON.ACTIVE_DRAWING : BUTTON.INACTIVE_DRAWING;

  return (
    <div className={LAYOUT.CONTAINER}>
      {/* Top Section - Tabs */}
      <div className={LAYOUT.TAB_CONTAINER}>
        <div className={LAYOUT.TAB_WRAPPER}>
          {TOP_LEVEL_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTopLevelTab(tab.id)}
              className={`${BUTTON.TOP_LEVEL} ${getTabClass(topLevelTab === tab.id)}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {topLevelTab === "measurement" && (
          <div className={LAYOUT.TAB_WRAPPER}>
            {UNIT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${BUTTON.UNIT} ${getTabClass(activeTab === tab.id)}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className={LAYOUT.MAIN_CONTENT}>
        {/* Measurement View */}
        <div
          className={LAYOUT.MEASUREMENT_VIEW}
          style={{ display: topLevelTab === "measurement" ? "flex" : "none" }}
        >
          {/* Visual Area - Left */}
          <div className={LAYOUT.VISUAL_AREA}>
            <div
              className={UTILITY.ABSOLUTE_INSET}
              style={{
                zIndex: isDrawingMode ? Z_INDEX.BEHIND : Z_INDEX.ON_TOP,
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
                <div className={UTILITY.FLEX_CENTER}>
                  <h1 className={TEXT.LIGHT_VIEW}>💡 Light View</h1>
                </div>
              )}
            </div>

            <div className={UTILITY.ABSOLUTE_INSET}>
              <Whiteboard transparent={true} hideUi={!isDrawingMode} />
            </div>

            <button
              onClick={toggleDrawing}
              className={`${BUTTON.DRAWING_TOGGLE} ${getDrawingButtonClass()}`}
            >
              {isDrawingMode ? "✏️ Stop Drawing" : "✏️ Start Drawing"}
            </button>
          </div>

          {/* Info Panel - Right */}
          <div className={LAYOUT.INFO_PANEL}>
            <h1 className={TEXT.TITLE}>تعریف طول در گذر زمان</h1>

            <div className={UTILITY.FLEX_COL}>
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
          className={LAYOUT.FULL_WHITEBOARD}
          style={{ display: topLevelTab === "whiteboard" ? "block" : "none" }}
        >
          <Whiteboard transparent={false} hideUi={false} />
        </div>
      </div>
    </div>
  );
}

export default Length;
