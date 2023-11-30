import React, { useState } from "react";
import VendorCard from "../components/VendorCard";
import ServicesDropdown from "./components/ServicesDropdown";

const BookService = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (selectedValue) => {
    setSelectedService(selectedValue);
  };
  return (
    <div className="px-4 py-6 md:px-24 md:py-12 bg-base-100 text-base-400">
      <h1 className="text-xl md:text-2xl font-bold">Schedule a service.</h1>
      <div className="my-2 md:my-5 items-center">
        <ServicesDropdown onSelectChange={handleServiceChange} />
      </div>
      <hr className="bg-base-400/60 h-0.5" />
      <div className="my-2 md:my-4 md:mx-5">
        <h1 className="text-base md:text-2xl font-bold text-center md:mt-5 uppercase">
          {selectedService}
        </h1>
        <div className="md:w-full px-12 py-2 md:px-24 md:py-4 mx-auto">
          <VendorCard />
        </div>
      </div>
    </div>
  );
};

export default BookService;
