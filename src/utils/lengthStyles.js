export const LAYOUT = {
  CONTAINER: "min-h-screen flex flex-col bg-slate-600 p-2 sm:p-5 gap-2",
  TAB_CONTAINER: "bg-slate-800 rounded-lg p-2 flex flex-col gap-2",
  TAB_WRAPPER: "flex flex-wrap gap-1",
  MAIN_CONTENT: "flex-1 flex flex-col lg:flex-row gap-2 min-h-0",
  MEASUREMENT_VIEW: "flex-1 flex flex-col lg:flex-row gap-2 min-h-0",
  VISUAL_AREA:
    "flex-1 bg-slate-700 rounded-lg p-2 sm:p-4 relative overflow-hidden min-h-[300px] lg:min-h-0",
  INFO_PANEL:
    "lg:w-80 w-full bg-slate-700 flex flex-col px-4 sm:px-6 py-4 sm:py-8 rounded-lg overflow-y-auto max-h-[300px] lg:max-h-none",
  FULL_WHITEBOARD: "flex-1 bg-slate-700 rounded-lg p-2 sm:p-4 min-h-0",
};

export const BUTTON = {
  TOP_LEVEL:
    "flex-1 min-w-[100px] py-2 px-3 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium cursor-pointer",
  UNIT: "flex-1 min-w-[70px] py-1.5 px-2 rounded-md transition-colors duration-200 text-[10px] sm:text-xs font-medium cursor-pointer",
  DRAWING_TOGGLE:
    "absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg transition-colors duration-200 font-medium text-xs sm:text-sm",
  ACTIVE: "bg-slate-600 text-white",
  INACTIVE: "text-slate-400 hover:text-white hover:bg-slate-700",
  ACTIVE_DRAWING: "bg-red-600 hover:bg-red-700 text-white",
  INACTIVE_DRAWING: "bg-slate-600 hover:bg-slate-500 text-white",
};

export const TEXT = {
  TITLE:
    "text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center",
  DEFINITION_TITLE: "text-white text-xs sm:text-sm mb-2 sm:mb-4",
  DEFINITION_CONTENT:
    "text-sm sm:text-lg md:text-xl font-light leading-relaxed text-white",
  DEFINITION_CONTENT_RTL:
    "text-xs sm:text-base md:text-lg font-light leading-relaxed text-white text-right",
  DEFINITION_NOTE: "text-white text-[10px] sm:text-xs mt-4 sm:mt-6 italic",
  DEFINITION_NOTE_SMALL:
    "text-white text-[10px] sm:text-xs mt-3 sm:mt-4 italic",
  LIGHT_VIEW: "text-white text-xl sm:text-3xl font-bold",
};

export const CARD = {
  DEFINITION: "bg-slate-800 rounded-lg p-3 sm:p-6 w-full",
  INFO_PANEL_TITLE:
    "text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center",
};

export const UTILITY = {
  ABSOLUTE_INSET: "absolute inset-0",
  FLEX_CENTER: "flex items-center justify-center w-full h-full",
  FLEX_COL: "flex flex-col items-center justify-center",
};

export const Z_INDEX = {
  BEHIND: 0,
  ON_TOP: 1,
  OVERLAY: 10,
};
