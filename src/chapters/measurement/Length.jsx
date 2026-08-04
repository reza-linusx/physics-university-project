import React, { useState } from "react";
import Earth from "../../components/Earth";
import PlatinumView from "../../components/PlatinumView";
import RepeatingWaveView from "../../components/RepeatingWaveView";
import Whiteboard from "../../components/Whiteboard";
import {
  LAYOUT,
  BUTTON,
  TEXT,
  CARD,
  UTILITY,
  Z_INDEX,
} from "../../utils/lengthStyles";

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
          <button
            onClick={() => setTopLevelTab("measurement")}
            className={`${BUTTON.TOP_LEVEL} ${getTabClass(topLevelTab === "measurement")}`}
          >
            📐 Measurement
          </button>
          <button
            onClick={() => setTopLevelTab("whiteboard")}
            className={`${BUTTON.TOP_LEVEL} ${getTabClass(topLevelTab === "whiteboard")}`}
          >
            📝 Whiteboard
          </button>
        </div>

        {topLevelTab === "measurement" && (
          <div className={LAYOUT.TAB_WRAPPER}>
            <button
              onClick={() => setActiveTab("earth")}
              className={`${BUTTON.UNIT} ${getTabClass(activeTab === "earth")}`}
            >
              🌍 قطب تا استوا
            </button>
            <button
              onClick={() => setActiveTab("bar")}
              className={`${BUTTON.UNIT} ${getTabClass(activeTab === "bar")}`}
            >
              📏 میله پلاتین
            </button>
            <button
              onClick={() => setActiveTab("atom")}
              className={`${BUTTON.UNIT} ${getTabClass(activeTab === "atom")}`}
            >
              ⚛️ اتم
            </button>
            <button
              onClick={() => setActiveTab("light")}
              className={`${BUTTON.UNIT} ${getTabClass(activeTab === "light")}`}
            >
              💡 نور
            </button>
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
              {activeTab === "earth" && (
                <div className="text-white text-center w-full">
                  <p className={TEXT.DEFINITION_TITLE}>تعریف اول</p>
                  <div className={CARD.DEFINITION}>
                    <p className={TEXT.DEFINITION_CONTENT}>
                      یک متر = 1/10,000,000 فاصله قطب تا استوا
                    </p>
                  </div>
                  <p className={TEXT.DEFINITION_NOTE}>
                    به دلایل علمی، این تعریف زمینی کنار گذاشته شد
                  </p>
                </div>
              )}

              {activeTab === "bar" && (
                <div className="text-white text-center w-full">
                  <p className={TEXT.DEFINITION_TITLE}>تعریف دوم</p>
                  <div className={CARD.DEFINITION}>
                    <p className={TEXT.DEFINITION_CONTENT_RTL}>
                      متر به صورت فاصله بین دو خراش در دو سر یک میله از جنس
                      پلاتین-ایریدیم تعریف شد که در اداره بین‌المللی اوزان و
                      مقیاس‌ها در پاریس نگهداری می‌شد و نمونه‌های دقیقی به
                      آزمایشگاه‌های سراسر جهان فرستاده شد.
                    </p>
                  </div>
                  <p className={TEXT.DEFINITION_NOTE_SMALL}>
                    این استاندارد قابل دسترس‌تر بود
                  </p>
                </div>
              )}

              {activeTab === "atom" && (
                <div className="text-white text-center w-full">
                  <p className={TEXT.DEFINITION_TITLE}>تعریف سوم</p>
                  <div className={CARD.DEFINITION}>
                    <p className={TEXT.DEFINITION_CONTENT}>
                      یک متر = 1,650,763.73 طول موج
                    </p>
                  </div>
                  <p className={TEXT.DEFINITION_NOTE}>
                    مبتنی بر طول موج کریپتون-۸۶
                  </p>
                </div>
              )}

              {activeTab === "light" && (
                <div className="text-white text-center w-full">
                  <p className={TEXT.DEFINITION_TITLE}>تعریف چهارم</p>
                  <div className={CARD.DEFINITION}>
                    <p className={TEXT.DEFINITION_CONTENT}>
                      یک متر = 1/299,792,458 ثانیه نوری
                    </p>
                  </div>
                  <p className={TEXT.DEFINITION_NOTE}>
                    مبتنی بر سرعت نور در خلا
                  </p>
                </div>
              )}
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
