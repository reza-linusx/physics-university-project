import { createContext, useContext, useState } from "react";
export const ViewContext = createContext(null);

export default function ViewProvider({ children }) {
  const [view, setView] = useState("globe");
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}
