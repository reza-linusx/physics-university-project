import React, { useState } from "react";
import Earth from "../../components/Earth";
import PlatinumView from "../../components/PlatinumView";

function Length() {
  const [activeTab, setActiveTab] = useState("earth");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-600 p-5 gap-2">
      <div className="flex-1 lg:flex-3 bg-slate-700 flex flex-col items-center justify-center rounded-lg p-4">
        <div className="w-full bg-slate-800 rounded-lg p-1 flex gap-1 mb-4">
          <button
            onClick={() => setActiveTab("earth")}
            className={`flex-1 py-2 px-3 rounded-md transition-colors duration-200 text-xs font-medium cursor-pointer ${
              activeTab === "earth"
                ? "bg-slate-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            🌍 قطب تا استوا
          </button>
          <button
            onClick={() => setActiveTab("bar")}
            className={`flex-1 py-2 px-3 rounded-md transition-colors duration-200 text-xs font-medium cursor-pointer ${
              activeTab === "bar"
                ? "bg-slate-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            📏 میله پلاتین
          </button>
          <button
            onClick={() => setActiveTab("atom")}
            className={`flex-1 py-2 px-3 rounded-md transition-colors duration-200 text-xs font-medium cursor-pointer ${
              activeTab === "atom"
                ? "bg-slate-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            ⚛️ اتم
          </button>
          <button
            onClick={() => setActiveTab("light")}
            className={`flex-1 py-2 px-3 rounded-md transition-colors duration-200 text-xs font-medium cursor-pointer ${
              activeTab === "light"
                ? "bg-slate-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            💡 نور
          </button>
        </div>

        <div className="flex-1 w-full">
          {activeTab === "earth" && <Earth />}
          {activeTab === "bar" && <PlatinumView />}
          {activeTab === "atom" && (
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-white text-3xl font-bold">⚛️ Atom View</h1>
            </div>
          )}
          {activeTab === "light" && (
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-white text-3xl font-bold">💡 Light View</h1>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 lg:flex-1 bg-slate-700 flex flex-col px-6 py-8 rounded-lg overflow-y-auto">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
          تعریف طول در گذر زمان
        </h1>

        <div className="flex-1 flex flex-col items-center justify-center">
          {activeTab === "earth" && (
            <div className="text-white text-center w-full">
              <p className="text-white text-sm mb-4">تعریف اول</p>
              <div className="bg-slate-800 rounded-lg p-6 w-full">
                <p className="text-lg md:text-xl font-light leading-relaxed text-white">
                  یک متر = 1/10,000,000 فاصله قطب تا استوا
                </p>
              </div>
              <p className="text-white text-xs mt-6 italic">
                به دلایل علمی، این تعریف زمینی کنار گذاشته شد
              </p>
            </div>
          )}

          {activeTab === "bar" && (
            <div className="text-white text-center w-full">
              <p className="text-white text-sm mb-4">تعریف دوم</p>
              <div className="bg-slate-800 rounded-lg p-6 w-full">
                <p className="text-base md:text-lg font-light leading-relaxed text-white text-right">
                  متر به صورت فاصله بین دو خراش در دو سر یک میله از جنس
                  پلاتین-ایریدیم تعریف شد که در اداره بین‌المللی اوزان و
                  مقیاس‌ها در پاریس نگهداری می‌شد و نمونه‌های دقیقی به
                  آزمایشگاه‌های سراسر جهان فرستاده شد.
                </p>
                <p className="text-white text-xs mt-4 italic">
                  این استاندارد قابل دسترس‌تر بود
                </p>
              </div>
            </div>
          )}

          {activeTab === "atom" && (
            <div className="text-white text-center w-full">
              <p className="text-white text-sm mb-4">تعریف سوم</p>
              <div className="bg-slate-800 rounded-lg p-6 w-full">
                <p className="text-lg md:text-xl font-light leading-relaxed text-white">
                  یک متر = 1,650,763.73 طول موج
                </p>
              </div>
              <p className="text-white text-xs mt-6 italic">
                مبتنی بر طول موج کریپتون-۸۶
              </p>
            </div>
          )}

          {activeTab === "light" && (
            <div className="text-white text-center w-full">
              <p className="text-white text-sm mb-4">تعریف چهارم</p>
              <div className="bg-slate-800 rounded-lg p-6 w-full">
                <p className="text-lg md:text-xl font-light leading-relaxed text-white">
                  یک متر = 1/299,792,458 ثانیه نوری
                </p>
              </div>
              <p className="text-white text-xs mt-6 italic">
                مبتنی بر سرعت نور در خلا
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Length;
