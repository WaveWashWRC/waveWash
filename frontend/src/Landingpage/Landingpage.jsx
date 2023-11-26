import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";

export const Landingpage = () => {
  return (
    <div className="bg-green-100">
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
