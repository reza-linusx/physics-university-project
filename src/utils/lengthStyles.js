export const layout = {
  container: "min-h-screen flex flex-col p-2 gap-2 bg-slate-500",
  tabContainer: "bg-gray-700 rounded-lg p-2 flex flex-col gap-2",
  tabWrapper: "flex flex-wrap gap-1",
  mainContent: "flex flex-1",
  measurementView: "flex-1 flex flex-col md:flex-row gap-2",
  visualArea:
    "flex-3 bg-gray-700 rounded-lg p-2 relative overflow-hidden lg:min-h-0 cursor-grab",
  infoPanel: "flex-1 bg-gray-700 flex flex-col items-center justify-center p-4 rounded-lg",
  fullWhiteboard: "flex-1 bg-slate-700 rounded-lg p-2 sm:p-4 min-h-0",
};

export const button = {
  topLevel:
    "flex-1 min-w-[100px] py-3 px-3 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium cursor-pointer border border-white/10",
  unit: "flex-1 min-w-[70px] py-3.5 px-2 rounded-md transition-colors duration-200 text-[10px] sm:text-xs font-medium cursor-pointer border border-white/10",
  drawingToggle:
    "cursor-pointer absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg transition-colors duration-200 font-medium text-xs sm:text-sm",
  active: "bg-neutral-500 text-white",
  inactive: "text-slate-400 hover:text-white hover:bg-mist-400",
  activeDrawing: "bg-red-600 hover:bg-red-700 text-white",
  inactiveDrawing: "bg-slate-600 hover:bg-slate-500 text-white",
};

export const text = {
  title:
    "text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center",
  definitionTitle: "text-white text-xs sm:text-sm mb-2 sm:mb-4",
  definitionContent:
    "text-sm sm:text-lg md:text-xl font-light leading-relaxed text-white",
  definitionContentRtl:
    "text-xs sm:text-base md:text-lg font-light leading-relaxed text-white text-right",
  definitionNote: "text-white text-[10px] sm:text-xs mt-4 sm:mt-6 italic",
  definitionNoteSmall: "text-white text-[10px] sm:text-xs mt-3 sm:mt-4 italic",
  lightView: "text-white text-xl sm:text-3xl font-bold",
};

export const card = {
  definition: "bg-slate-800 rounded-lg p-3 sm:p-6 w-full",
  infoPanelTitle:
    "text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center",
};

export const utility = {
  absoluteInset: "absolute inset-0",
  flexCenter: "flex items-center justify-center w-full h-full",
  flexCol: "flex flex-col items-center justify-center",
};

export const zIndex = {
  behind: 0,
  onTop: 1,
  overlay: 10,
};
