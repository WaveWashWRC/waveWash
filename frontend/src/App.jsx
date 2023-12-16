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
import CheckServices from "./User/CheckServices";
import VendorDashboard from "./Vendor/VendorDashboard";
import Profile from "./Vendor/Profile";
import Ads from "./Vendor/Ads";
import AdDetails from "./Vendor/AdDetails";
import { Landingpage } from "./Landingpage/Landingpage";
import AdminDashboard from "./Admin/AdminDashboard";
import ApproveVendor from "./Admin/ApproveVendor";
import VendorOrder from "./Vendor/VendorOrder";
import LoginAdmin from "./Admin/LoginAdmin";
import RegisterAdmin from "./Admin/RegisterAdmin";

function App() {
  const [user, setUser] = useState({
    isAuthenticated: false,
  });
  const api = "http://localhost:8000";
  const [cookies, setCookie] = useCookies(["session"]);
  const token = cookies["session"];
  console.log(token);
  //if (token === null || token === undefined) window.location.replace("/login");
  useEffect(() => {
    !(token === undefined || token === null || token === "undefined") &&
      fetch(
        `${api}/api/auth/${window.location.host.split(".")[0] === "service" ? "vendor" :
          (window.location.host.split(".")[0] === "service" ? "user" : "admin")
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
              <Route path="/ad-details/:adId" element={<AdDetails />} />
              <Route path="/orders" element={<VendorOrder />} />
            </Route>
            <Route path="/login" element={<LoginVendor />} />
            <Route path="/register" element={<RegisterVendor />} />
          </Routes>
        ) : (
          window.location.host.split(".")[0]==='' ? 
          (<Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {user.isAuthenticated && (
              <Route path="/" element={<User />}>
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="services" element={<CheckServices />} />
                <Route path="book-service" element={<BookService />} />
                <Route path="post-an-ad" element={<PostAd />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="services" element={<History />} />
              </Route>
            )}
          </Routes>) :
          (
            <Routes>
              <Route path="/login" element={<LoginAdmin />} />
              <Route path="/register" element={<RegisterAdmin />} />
              <Route path="/landingpage" element={<Landingpage />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/vendors" element={<ApproveVendor />} />
            </Routes>
          )
        
        )}
      </Router>
    </authContext.Provider>
  );
}

export default App;
