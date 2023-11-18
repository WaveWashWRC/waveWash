import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./v_components/Home";
import V_Profile from "./v_components/V_Profile";
import V_Dashboard from "./v_components/V_Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}>
            {/* Nested Route for Products */}
            <Route path="profile" element={<V_Profile />} />
            <Route path="dashboard" element={<V_Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
