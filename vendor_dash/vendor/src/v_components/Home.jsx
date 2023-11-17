import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Welcome to the Home Page!</h1>
      <nav>
        <ul>
          <li>
            <Link to="product">Products</Link> {/* Nested Link */}
          </li>
          {/* Add other nested links here if needed */}
        </ul>
      </nav>
      <Outlet /> {/* Renders nested components */}
    </div>
  );
}

export default Home;
