import { createContext, useContext, useState } from "react";
export const ViewContext = createContext(null);

export default function ViewProvider({ children }) {
  const [view, setView] = useState("globe");
  const [overlayActivated, setOverlayActivated] = useState(false);
  return (
    <ViewContext.Provider
      value={{ view, setView, overlayActivated, setOverlayActivated }}
    >
      {children}
    </ViewContext.Provider>
  );
}
