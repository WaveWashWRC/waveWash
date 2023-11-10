import React, { useState } from "react";
import VendorCard from "../components/VendorCard";
import ServicesDropdown from "../components/ServicesDropdown";

const BookService = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (selectedValue) => {
    setSelectedService(selectedValue);
  };
  return (
    <div className="px-24 py-12 bg-base-100 w-full h-screen text-base-400">
      <h1 className="text-2xl font-bold">Schedule a service.</h1>
      <div className="my-5 items-center">
        <ServicesDropdown onSelectChange={handleServiceChange} />
      </div>
      <hr className="bg-base-400/60 h-0.5" />
      <div className="my-4 mx-5">
        <h1 className="text-2xl font-bold text-center mt-5 uppercase">
          {selectedService}
        </h1>
        <div className="w-full px-24 py-4 mx-auto">
          <VendorCard />
        </div>
      </div>
    </div>
  );
};

export default BookService;
