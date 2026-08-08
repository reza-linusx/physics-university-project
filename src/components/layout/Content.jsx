import GlobeView from "../GlobeView";
import PlatinumView from "../PlatinumView";
import RepeatingWaveView from "../RepeatingWaveView";
import PlatinumCylinderView from "../PlatinumCylinderView";

import { useContext } from "react";
import { ViewContext } from "../../context/ViewContext";

function Content() {
  const { view } = useContext(ViewContext);
  return (
    <div className="absolute inset-0 rounded-lg">
      {view === "globe" && <GlobeView />}
      {view === "platinumBar" && <PlatinumView />}
      {view === "wave" && <RepeatingWaveView />}
      {view === "cylinder" && <PlatinumCylinderView />}

      {view === "light" && (
        <div className="w-full h-full flex items-center justify-center text-2xl">
          <h1>تعریف بر اساس سرعت نور</h1>
        </div>
      )}
    </div>
  );
}

export default Content;
