import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginVendor from "./Vendor/LoginVendor";
import RegisterVendor from "./Vendor/RegisterVendor";
import Register from "./pages/Register";
import User from "./pages/User";
import authContext from "./context/AuthContext";
import { useContext, useDeferredValue, useEffect, useState } from "react";
import UserDashboard from "./User/UserDashboard";
import BookService from "./User/BookService";
import PostAd from "./User/PostAd";
import { useCookies } from "react-cookie";
import History from "./User/History";
import EditProfile from "./User/EditProfile";
import VendorDashboard from "./Vendor/VendorDashboard";
import Profile from "./Vendor/Profile";
import Ads from "./Vendor/Ads";
import AdDetails from "./Vendor/AdDetails";

function App() {
  const [user, setUser] = useState({
    isAuthenticated: false,
  });
  const api = "http://localhost:8000";
  const [cookies, setCookie] = useCookies(["session"]);
  const token = cookies["session"];

  useEffect(() => {
    !(token === undefined || token === null) &&
      fetch(
        `${api}/api/auth/${
          window.location.host.split(".")[0] === "service" ? "vendor" : "user"
        }`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${cookies["session"]}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUser({
            isAuthenticated: true,
            ...data,
          });
        })
        .catch((error) => console.log(error));
  }, []);

  return (
    <authContext.Provider value={user}>
      <Router>
        {window.location.host.split(".")[0] === "service" ? (
          <Routes>
            <Route path="/" element={<VendorDashboard />}>
              <Route path="/ads" element={<Ads />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addetails" element={<AdDetails />} />
            </Route>
            <Route path="/login" element={<LoginVendor />} />
            <Route path="/register" element={<RegisterVendor />} />
            {/* <Route path="dashboard" element={<V_Dashboard />} /> */}
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<User />}>
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="book-service" element={<BookService />} />
              <Route path="post-an-ad" element={<PostAd />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="history" element={<History />} />
            </Route>
          </Routes>
        )}
      </Router>
    </authContext.Provider>
  );
}

export default App;
