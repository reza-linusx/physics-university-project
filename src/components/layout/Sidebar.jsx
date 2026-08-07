import React, { useState, useContext } from "react";
import {
  PiChalkboardSimple,
  PiPencilRulerDuotone,
  PiRuler,
  PiScales,
  PiClock,
  PiCaretDown,
  PiCaretUp,
  PiX,
  PiArrowsHorizontal,
  PiRectangle,
  PiWaveSine,
  PiLightning,
  PiCylinder,
  PiAtom,
  PiChartBar,
  PiList,
  PiPencilLineFill,
  PiEyeFill,
  PiPencilSimpleSlash,
} from "react-icons/pi";
import { ViewContext } from "../../context/ViewContext";

function Sidebar() {
  const { view, setView, overlayActivated, setOverlayActivated } =
    useContext(ViewContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    length: false,
    mass: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleNavigation = (viewName) => {
    setView(viewName);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const menuButton =
    "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-700 text-gray-200 transition-colors";
  const linkStyle =
    "flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-700 text-gray-200 cursor-pointer transition-colors";

  return (
    <>
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-2 text-3xl cursor-pointer fixed z-30 top-3 left-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Open Menu"
        >
          <PiList />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-64 h-full min-h-screen bg-gray-800 border-r border-gray-700 flex-shrink-0
          transition-transform duration-300 ease-in-out z-50
          md:relative md:translate-x-0 md:block
          /* Mobile behavior: overlay style */
          ${sidebarOpen ? "fixed top-0 left-0 translate-x-0 shadow-2xl" : "fixed top-0 left-0 -translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          <header className="p-4 flex justify-between items-center border-b border-gray-700">
            <h1 className="font-semibold text-xl">فصل اول - اندازه گیری</h1>
            {/* Close button - only show on mobile */}
            <button
              className="md:hidden p-1 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close Menu"
            >
              <PiX className="w-6 h-6" />
            </button>
          </header>

          <nav className="flex-1 overflow-y-auto px-2 py-4">
            <ul className="space-y-1">
              {/* Whiteboard */}
              <li>
                <button
                  onClick={() => {
                    handleNavigation("whiteboard");
                    setOverlayActivated(false);
                  }}
                  className={`${linkStyle} w-full text-left ${view === "whiteboard" ? "bg-gray-700" : ""}`}
                >
                  <PiChalkboardSimple className="w-5 h-5" /> وایت برد
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    if (view !== "whiteboard") {
                      setOverlayActivated(!overlayActivated);
                    }
                  }}
                  disabled={view === "whiteboard"}
                  className={`${linkStyle} w-full text-left transition-colors ${
                    overlayActivated ? "bg-gray-700" : ""
                  } ${view === "whiteboard" ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {view === "whiteboard" ? (
                    // When on Whiteboard: Show disabled icon + text
                    <>
                      <PiPencilSimpleSlash className="w-5 h-5" /> نوشتن روی صفحه
                      (غیرفعال)
                    </>
                  ) : overlayActivated ? (
                    // When Overlay is ON: Show an Eye icon + "Disable"
                    <>
                      <PiEyeFill className="w-5 h-5" /> فعالسازی شکل
                    </>
                  ) : (
                    // When Overlay is OFF: Show a Pencil icon + "Enable"
                    <>
                      <PiPencilLineFill className="w-5 h-5" /> نوشتن روی صفحه
                    </>
                  )}
                </button>
              </li>

              {/* Length Dropdown */}
              <li>
                <button
                  onClick={() => toggleMenu("length")}
                  className={`${menuButton} ${openMenus.length ? "bg-gray-700/50" : ""}`}
                >
                  <PiRuler className="w-5 h-5" /> طول
                  <span className="ml-auto">
                    {openMenus.length ? <PiCaretUp /> : <PiCaretDown />}
                  </span>
                </button>

                {openMenus.length && (
                  <ul className="pl-6 space-y-1 mt-1 border-l border-gray-700 ml-2">
                    <li>
                      <button
                        onClick={() => handleNavigation("globe")}
                        className={`${linkStyle} w-full text-left ${view === "globe" ? "bg-gray-700" : ""}`}
                      >
                        <PiArrowsHorizontal className="w-5 h-5" />
                        فاصله قطب تا استوا
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() => handleNavigation("platinumBar")}
                        className={`${linkStyle} w-full text-left ${view === "platinumBar" ? "bg-gray-700" : ""}`}
                      >
                        <PiRectangle className="w-5 h-5" />
                        میله پلاتینی
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation("wave")}
                        className={`${linkStyle} w-full text-left ${view === "wave" ? "bg-gray-700" : ""}`}
                      >
                        <PiWaveSine className="w-5 h-5" />
                        طول موج اتم
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation("light")}
                        className={`${linkStyle} w-full text-left ${view === "light" ? "bg-gray-700" : ""}`}
                      >
                        <PiLightning className="w-5 h-5" />
                        بر اساس سرعت نور
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mass Dropdown */}
              <li>
                <button
                  onClick={() => toggleMenu("mass")}
                  className={`${menuButton} ${openMenus.mass ? "bg-gray-700/50" : ""}`}
                >
                  <PiScales className="w-5 h-5" /> جرم
                  <span className="ml-auto">
                    {openMenus.mass ? <PiCaretUp /> : <PiCaretDown />}
                  </span>
                </button>
                {openMenus.mass && (
                  <ul className="pl-6 space-y-1 mt-1 border-l border-gray-700 ml-2">
                    <li>
                      <a className={linkStyle} href="#">
                        <PiCylinder className="w-5 h-5" />
                        استوانه پلاتین-ایریدیوم
                      </a>
                    </li>
                    <li>
                      <a className={linkStyle} href="#">
                        <PiAtom className="w-5 h-5" />
                        یکای جرم اتمی
                      </a>
                    </li>
                    <li>
                      <a className={linkStyle} href="#">
                        <PiChartBar className="w-5 h-5" />
                        چگالی
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Time – single link */}
              <li>
                <a className={linkStyle} href="#">
                  <PiClock className="w-5 h-5" /> زمان
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
