import React from "react";
import Heading from "./layout/Heading";
import ServicesCard from "./layout/Servicescard";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";

const Services = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center text-black justify-center md:px-32 px-5">
      <div className="font-bold text-3xl mb-4">Services Offered</div>
      <div className="flex flex-col md:flex-row gap-5">
        <ServicesCard
          img={img1}
          title="Bidding Innovation"
          description="Engage in our unique bidding system where vendors compete to offer the most competitive prices. Users have the power to choose the best price, ensuring affordability and quality service."
        />
        <ServicesCard
          img={img2}
          title="Doorstep Convenience"
          description="Experience hassle-free services! Our vendors provide door-to-door pickup and delivery for cars, bikes, and even aquariums. Your vehicle's cleanliness is just a doorstep away."
        />
        <ServicesCard
          img={img3}
          title="Part-time Opportunities"
          description="Join our community and earn as a part-time washer! Students and enthusiasts can earn extra income by providing washing services flexibly, making it a convenient part-time job."
        />
      </div>
    </div>
  );
};

export default Services;
