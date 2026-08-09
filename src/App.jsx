// React libraries
import React, { useContext } from "react";

// Layouts & content
import Sidebar from "./components/layout/Sidebar";
import DefinitionPanel from "./components/layout/DefinitionPanel";
import Content from "./components/layout/Content";

// whiteboards
import OverlayWhiteboard from "./components/OverlayWhiteboard";

// context
import { ViewContext } from "./context/ViewContext";

// math
import { MathJaxContext } from "better-react-mathjax";

function App() {
  const { overlayActivated } = useContext(ViewContext);
  return (
    <MathJaxContext>
      <div className="min-h-screen bg-gray-800 text-white flex relative">
        <Sidebar />
        <div className="flex-1 relative p-5 max-w-screen h-screen overflow-hidden">
          {overlayActivated && <OverlayWhiteboard />}
          <Content />
        </div>
        <DefinitionPanel />
      </div>
    </MathJaxContext>
  );
}

export default App;
