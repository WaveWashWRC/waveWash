import React from "react";
import car2 from "../assets/car2.png";
import Button from "./layout/Button";
import Heading from "./layout/Heading";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center text-gray-950 gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={car2} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="Why choose" title2="Us?" />
        <p className=" text-lightText">
          WaveWash—where quality meets convenience! Experience top-notch car
          care without leaving your home. Why settle for ordinary when you can
          have extraordinary service? Choose us and redefine your car wash
          experience.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
