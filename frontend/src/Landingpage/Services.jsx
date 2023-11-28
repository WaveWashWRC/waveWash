import React from "react";
import Heading from "./layout/Heading";
import ServicesCard from "./layout/Servicescard";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";

const Services = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center text-black justify-center md:px-32 px-5">
      <Heading title1="Services" title2="Offered" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ServicesCard img={img1} />
        <ServicesCard img={img2} />
        <ServicesCard img={img3} />
      </div>
    </div>
  );
};

export default Services;
