import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const ServicesDropdown = ({ onSelectChange }) => {
  const washes = [
    "Car Wash",
    "Bike Wash",
    "Tank and Sump Wash",
    "Aquarium Wash",
    "Pet Wash",
    "Bathroom and Tiles Cleaning",
    "Carpet, Sofa, and Curtain Cleaning",
    "Gardening",
  ];

  // Use the useState hook to manage the selected value
  const [service, setService] = useState("");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setService(selectedValue);
    onSelectChange(selectedValue);
  };

  return (
    <div>
      <div className="form-control">
        <div className="input-group input-group-vertical">
          <select
            className="select select-bordered border-base-400 bg-base-100 md:w-96"
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
                className="text-sm md:text-base md:py-2 md:px-4 border-base-200 border-b-2 rounded-md w-full"
                value={wash}
              >
                {wash}
              </option>
            ))}
          </select>
          {/* <button className="bg-base-100 border-0" aria-label="Search">
            <HiOutlineSearch
              className="text-base-200 hover:text-base-200 transition-colors duration-75 cursor-pointer hover:bg-gray-200 rounded-full p-2"
              size={40}
            />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
