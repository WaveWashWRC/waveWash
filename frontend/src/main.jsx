import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import authContext from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <authContext.Provider value={{isAuthenticated:false}}>
      <App />
    </authContext.Provider>
  </React.StrictMode>
);
