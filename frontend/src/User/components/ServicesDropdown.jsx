import React, { useState } from "react";


const ServicesDropdown = ({ onSelectChange }) => {
  const washes = [
    "Car wash - Hatchback",
    "Car wash - Sedan",
    "Car wash - SUV",
    "Bike wash",
    "Tank and Sump wash",
    "Aquarium wash",
    "Pet wash",
    "Bathroom and Tiles cleaning",
    "Carpet, Sofa, and curtain cleaning",
    "Gardening",
  ];

  const [service, setService] = useState("");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setService(selectedValue);
    onSelectChange(selectedValue);
  };

  return (
    <div className=" mt-1 md:mt-3">
      <div className="relative w-72">
        <select
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 text-sm md:text-lg"
          onChange={handleSelectChange}
          value={service}
          aria-label="Select a service type"
        >
          <option value="" key="default" disabled hidden>
            Select a service type
          </option>
          {washes.map((wash) => (
            <option
              key={wash}
              className="text-sm md:text-base text-black hover:bg-blue-100 hover:text-blue-500"
              value={wash}
            >
              {wash}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
          
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
