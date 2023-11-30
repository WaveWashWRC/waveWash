import React from "react";
import ServicesDropdown from "./ServicesDropdown";

const handleServiceChange = (selectedValue) => {
  setSelectedService(selectedValue);
};

const SearchVendors = () => {
  return (
    <div>
      <div className="text-sm md:text-xl text-base-400 font-bold">
        Search for vendors near you
      </div>
      <ServicesDropdown onSelectChange={handleServiceChange} />
    </div>
  );
};

export default SearchVendors;
