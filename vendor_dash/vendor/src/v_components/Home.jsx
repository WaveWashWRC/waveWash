import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data !== "success" && data !== "Success") {
          console.log(data);
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [navigate]);

  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="p-4">
        <div className="bg-teal-200">Header</div>
        <div>
          <Outlet />
        </div>
        {/* <p>flooter</p> */}
      </div>
    </div>
  );
}

export default Home;
