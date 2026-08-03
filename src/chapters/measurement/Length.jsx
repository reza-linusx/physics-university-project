import React, { useState } from "react";
import Earth from "../../components/Earth";
import PlatinumView from "../../components/PlatinumView";
import RepeatingWaveView from "../../components/RepeatingWaveView";
import Whiteboard from "../../components/Whiteboard";

function Length() {
  const [activeTab, setActiveTab] = useState("earth");
  const [topLevelTab, setTopLevelTab] = useState("measurement");
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  const toggleDrawing = () => setIsDrawingMode(!isDrawingMode);

  return (
    <div className="min-h-screen flex flex-col bg-slate-600 p-2 sm:p-5 gap-2">
      {/* Top Section - Tabs */}
      <div className="bg-slate-800 rounded-lg p-2 flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setTopLevelTab("measurement")}
            className={`flex-1 min-w-[100px] py-2 px-3 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium cursor-pointer ${
              topLevelTab === "measurement"
                ? "bg-slate-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            📐 Measurement
          </button>
          <button
            onClick={() => setTopLevelTab("whiteboard")}
            className={`flex-1 min-w-[100px] py-2 px-3 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium cursor-pointer ${
              topLevelTab === "whiteboard"
                ? "bg-slate-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            📝 Whiteboard
          </button>
        </div>

        {topLevelTab === "measurement" && (
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab("earth")}
              className={`flex-1 min-w-[70px] py-1.5 px-2 rounded-md transition-colors duration-200 text-[10px] sm:text-xs font-medium cursor-pointer ${
                activeTab === "earth"
                  ? "bg-slate-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              🌍 قطب تا استوا
            </button>
            <button
              onClick={() => setActiveTab("bar")}
              className={`flex-1 min-w-[70px] py-1.5 px-2 rounded-md transition-colors duration-200 text-[10px] sm:text-xs font-medium cursor-pointer ${
                activeTab === "bar"
                  ? "bg-slate-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              📏 میله پلاتین
            </button>
            <button
              onClick={() => setActiveTab("atom")}
              className={`flex-1 min-w-[70px] py-1.5 px-2 rounded-md transition-colors duration-200 text-[10px] sm:text-xs font-medium cursor-pointer ${
                activeTab === "atom"
                  ? "bg-slate-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              ⚛️ اتم
            </button>
            <button
              onClick={() => setActiveTab("light")}
              className={`flex-1 min-w-[70px] py-1.5 px-2 rounded-md transition-colors duration-200 text-[10px] sm:text-xs font-medium cursor-pointer ${
                activeTab === "light"
                  ? "bg-slate-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              💡 نور
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row gap-2 min-h-0">
        {/* Measurement View */}
        <div
          className="flex-1 flex flex-col lg:flex-row gap-2 min-h-0"
          style={{ display: topLevelTab === "measurement" ? "flex" : "none" }}
        >
          {/* Visual Area - Left */}
          <div className="flex-1 bg-slate-700 rounded-lg p-2 sm:p-4 relative overflow-hidden min-h-[300px] lg:min-h-0">
            <div
              className="absolute inset-0"
              style={{
                zIndex: isDrawingMode ? 0 : 1,
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
                <div className="flex items-center justify-center w-full h-full">
                  <h1 className="text-white text-xl sm:text-3xl font-bold">
                    💡 Light View
                  </h1>
                </div>
              )}
            </div>

            <div
              className="absolute inset-0"
              style={{
                zIndex: isDrawingMode ? 1 : 0,
                pointerEvents: isDrawingMode ? "auto" : "none",
              }}
            >
              <Whiteboard transparent={true} hideUi={!isDrawingMode} />
            </div>

            <button
              onClick={toggleDrawing}
              className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg transition-colors duration-200 font-medium text-xs sm:text-sm ${
                isDrawingMode
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-slate-600 hover:bg-slate-500 text-white"
              }`}
            >
              {isDrawingMode ? "✏️ Stop Drawing" : "✏️ Start Drawing"}
            </button>
          </div>

          {/* Info Panel - Right */}
          <div className="lg:w-80 w-full bg-slate-700 flex flex-col px-4 sm:px-6 py-4 sm:py-8 rounded-lg overflow-y-auto max-h-[300px] lg:max-h-none">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
              تعریف طول در گذر زمان
            </h1>

            <div className="flex-1 flex flex-col items-center justify-center">
              {activeTab === "earth" && (
                <div className="text-white text-center w-full">
                  <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
                    تعریف اول
                  </p>
                  <div className="bg-slate-800 rounded-lg p-3 sm:p-6 w-full">
                    <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed text-white">
                      یک متر = 1/10,000,000 فاصله قطب تا استوا
                    </p>
                  </div>
                  <p className="text-white text-[10px] sm:text-xs mt-4 sm:mt-6 italic">
                    به دلایل علمی، این تعریف زمینی کنار گذاشته شد
                  </p>
                </div>
              )}

              {activeTab === "bar" && (
                <div className="text-white text-center w-full">
                  <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
                    تعریف دوم
                  </p>
                  <div className="bg-slate-800 rounded-lg p-3 sm:p-6 w-full">
                    <p className="text-xs sm:text-base md:text-lg font-light leading-relaxed text-white text-right">
                      متر به صورت فاصله بین دو خراش در دو سر یک میله از جنس
                      پلاتین-ایریدیم تعریف شد که در اداره بین‌المللی اوزان و
                      مقیاس‌ها در پاریس نگهداری می‌شد و نمونه‌های دقیقی به
                      آزمایشگاه‌های سراسر جهان فرستاده شد.
                    </p>
                    <p className="text-white text-[10px] sm:text-xs mt-3 sm:mt-4 italic">
                      این استاندارد قابل دسترس‌تر بود
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "atom" && (
                <div className="text-white text-center w-full">
                  <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
                    تعریف سوم
                  </p>
                  <div className="bg-slate-800 rounded-lg p-3 sm:p-6 w-full">
                    <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed text-white">
                      یک متر = 1,650,763.73 طول موج
                    </p>
                  </div>
                  <p className="text-white text-[10px] sm:text-xs mt-4 sm:mt-6 italic">
                    مبتنی بر طول موج کریپتون-۸۶
                  </p>
                </div>
              )}

              {activeTab === "light" && (
                <div className="text-white text-center w-full">
                  <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
                    تعریف چهارم
                  </p>
                  <div className="bg-slate-800 rounded-lg p-3 sm:p-6 w-full">
                    <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed text-white">
                      یک متر = 1/299,792,458 ثانیه نوری
                    </p>
                  </div>
                  <p className="text-white text-[10px] sm:text-xs mt-4 sm:mt-6 italic">
                    مبتنی بر سرعت نور در خلا
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Whiteboard - Full width */}
        <div
          className="flex-1 bg-slate-700 rounded-lg p-2 sm:p-4 min-h-0"
          style={{ display: topLevelTab === "whiteboard" ? "block" : "none" }}
        >
          <Whiteboard transparent={false} hideUi={false} />
        </div>
      </div>
    </div>
  );
}

export default Length;
