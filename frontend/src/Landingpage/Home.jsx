import React from "react";
import car from "../assets/car.jpg";
import Button from "./layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between text-gray-950 items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
          Book your service with
          <span className="text-teal-600"> Wavewash</span>
        </h2>
        <span className=" text-md font-semibold leading-tight">
          "WaveWash: Your Ultimate Vehicle Cleaning Solution!
        </span>

        <p className=" text-lightText mt-5 text-center">
          Get premium care for your car or bike hassle-free. Book services from
          local vendors, and enjoy the convenience of pick-up and drop-off right
          at your doorstep. Discover effortless vehicle maintenance with
          WaveWash!"
        </p>

        <Link to="services" spy={true} smooth={true} duration={500}>
          <Button
            title="Try out Services"
            className="hover:bg-teal-600 hover:text-black"
          />
        </Link>
      </div>

      <div className=" w-full md:w-2/4 md:ml-10">
        <img src={car} alt="img" className="mt-5 md:mt-0" />
      </div>
    </div>
  );
};

export default Home;
