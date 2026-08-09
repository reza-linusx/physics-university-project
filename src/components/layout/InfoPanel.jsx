import React, { useState } from "react";
import { PiCaretRight, PiCaretLeft, PiX } from "react-icons/pi";

export default function InfoPanel({ title, description }) {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setPanelOpen(!panelOpen)}
        className={`
          lg:hidden fixed z-40 top-3 right-3 p-2 bg-gray-800 text-gray-200 
          rounded-lg hover:bg-gray-700 transition-colors border border-gray-700
          ${panelOpen ? "hidden" : "block"}
        `}
        aria-label="Open Info Panel"
      >
        <PiCaretLeft className="w-6 h-6" />
      </button>

      <div
        className={`
          fixed lg:relative top-0 right-0 h-full min-h-screen w-75 
          bg-gray-800 border-l border-gray-700 p-4 text-center overflow-y-auto
          transition-transform duration-300 ease-in-out z-40
          flex flex-col shadow-2xl lg:shadow-none
          
          /* Mobile: slide in/out */
          ${panelOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0 lg:block
        `}
      >
        <div className="flex justify-between items-center border-b-2 border-gray-700 pb-3 mb-4">
          <h2 className="text-lg font-semibold text-gray-200 w-full text-center">
            اطلاعات
          </h2>

          <button
            onClick={() => setPanelOpen(false)}
            className="lg:hidden p-1 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close Panel"
          >
            <PiX className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1">
          <div className="border-b-2 border-gray-700 pb-5 mb-4">
            <h1 className="p-4 bg-slate-700 rounded-lg mb-4">{title}</h1>
            <p className="p-4 bg-slate-700 rounded-lg min-h-[80px]">
              {description}
            </p>
          </div>

          <h1 className="p-5 mt-3 bg-gray-700 rounded-lg">
            محل قرار گیری فرمول ها
          </h1>
        </div>
      </div>
    </>
  );
}
