import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        console.log(data);
        if (data === "success") {
          console.log("Login successful");
        } else {
          console.log("Login failed. Redirecting to /login");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  }, [navigate]);

  return <h2>Dashboard</h2>;
}

export default Home;
