import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginVendor from "./Vendor/LoginVendor";
import RegisterVendor from "./Vendor/RegisterVendor";
import Register from "./pages/Register";
import User from "./pages/User";
import { useCookies } from "react-cookie";
import authContext from "./context/AuthContext";
import { useContext, useState } from "react";
import UserDashboard from "./User/UserDashboard";
import BookService from "./User/BookService";
import PostAd from "./User/PostAd";

function App() {
  const [user, setUser] = useState({
    isAuthenticated: false,
    userId: undefined,
    imgUrl: undefined,
    username: undefined,
    email: undefined,
    token: undefined,
  });

  const [cookies, setCookie] = useCookies(["session"]);
  const token = cookies["session"];

  return (
    <authContext.Provider value={user}>

      <Router>
        {(window.location.host.split(".")[0] == "service") ?
          <Routes>
            <Route path="/login" element={<LoginVendor />}/>
            <Route path="/register" element={<RegisterVendor />} />
          </Routes>
          : <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />}>
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="book-service" element={<BookService />} />
              <Route path="post-an-ad" element={<PostAd />} />
            </Route>
          </Routes>}
      </Router>
    </authContext.Provider>
  );
}

export default App;
