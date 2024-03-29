import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcAreaChart } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "./VendorNavigation";
import classNames from "classnames";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:no-underline rounded-sm text-base";

export default function VendorSidebar() {
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
        className={classNames(
          pathname === item.path ? "text-white" : "",
          classNames(linkClass)
        )}
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </Link>
    );
  }

  return (
    <>
      {!isSmallScreen && (
        <div className="bg-cyan-400 w-60 p-3 flex flex-col text-black">
          <div className="flex items-center gap-2">
            <FcAreaChart fontSize={24} />
            <span className="text-white text-lg font-bold">WaveWash</span>
          </div>
          <div className="flex-1 py-8 flex flex-col gap-0.5">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex flex-col gap-0.5">
              {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLink className={linkClass} key={item.key} item={item} />
              ))}
              <Link
                to={"/login"}
                className={classNames("text-red-800", linkClass)}
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
            <div className="bg-cyan-400 w-60 p-3 flex flex-col text-black">
              <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                  <SidebarLink key={item.key} item={item} />
                ))}
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="flex flex-col gap-0.5">
                  {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink
                      className={linkClass}
                      key={item.key}
                      item={item}
                    />
                  ))}
                  <Link
                    to={"/"}
                    className={classNames("text-red-800", linkClass)}
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
