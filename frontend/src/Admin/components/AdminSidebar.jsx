import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcAreaChart } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "./AdminNavigation";

export default function AdminSidebar() {
  const { pathname } = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function SidebarLink({ item }) {
    return (
      <Link
        to={item.path}
        className={`${
          pathname === item.path ? "text-gray-800" : ""
        } flex items-center gap-2 font-light px-3 py-2 hover:no-underline rounded-sm text-base`}
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </Link>
    );
  }

  return (
    <>
      {!isSmallScreen && (
        <div className="bg-white p-3 flex flex-col text-black">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 text-lg font-bold">
              WaveWash Admin
            </span>
          </div>
          <div className="flex-1 py-8 flex flex-col gap-0.5">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex flex-col gap-0.5">
              {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
              ))}
              <Link
                to={"/login"}
                className="text-red-800 flex items-center gap-2 font-light px-3 py-2 hover:no-underline rounded-sm text-base"
              >
                <span className="text-xl">
                  <HiOutlineLogout />
                </span>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isSmallScreen && (
        <div className="md:hidden">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className=" text-2xl p-2 focus:outline-none text-black"
          >
            &#x2630; {/* Hamburger icon */}
          </button>
          {showOptions && (
            <div className="bg-white w-60 p-3 flex flex-col text-black">
              <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                  <SidebarLink key={item.key} item={item} />
                ))}
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="flex flex-col gap-0.5">
                  {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                  ))}
                  <Link
                    to={"/"}
                    className="text-red-800 flex items-center gap-2 font-light px-3 py-2 hover:no-underline rounded-sm text-base"
                  >
                    <span className="text-xl">
                      <HiOutlineLogout />
                    </span>
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
