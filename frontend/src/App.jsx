import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import { useCookies } from "react-cookie";
import authContext from "./context/AuthContext";
import { useContext, useState,useEffect } from "react";
import LoginVendor from "./Vendor/LoginVendor";
import UserDashboard from "./User/UserDashboard";
import BookService from "./User/BookService";
import PostAd from "./User/PostAd";
import VendorDashboard from "./Vendor/VendorDashboard";


function App() {
  const [user, setUser] = useState({
    isAuthenticated: false,
    userId: undefined,
    imgUrl: undefined,
    username: undefined,
    email: undefined,
    token: undefined,
  });

  const api = "http://localhost:8000";
  const [cookies, setCookie] = useCookies(["session"]);
  const token = cookies["session"];
  useEffect(() => {
    (token !== "undefined" || null) &&
      fetch(
        `${api}/api/auth/${
          window.location.host.split(".")[0] == "service" ? "vendor" : "user"
        }`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setUser({
            isAuthenticated: true,
            ...data,
          });
        });
  }, []);

  return (
    <authContext.Provider value={user}>
      <Router>
        <Routes>

          {window.location.host.split(".")[0] === "service" ? (
            <>
              <Route path="/login" element={<LoginVendor />} />
              <Route path="/register" element={<RegisterVendor />} />
              <Route path="/dashboard" element={<VendorDashboard />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user" element={<User />}>
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="book-service" element={<BookService />} />
                <Route path="post-an-ad" element={<PostAd />} />
              </Route>
            </>
          )}
        </Routes>
      </Router>
    </authContext.Provider>
  );
}

export default App;
