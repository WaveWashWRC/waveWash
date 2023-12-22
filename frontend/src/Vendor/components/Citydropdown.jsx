import React, { useState } from "react";

const Citydropdown = ({ onSelectChange }) => {
  const cities = ["Bangalore", "Mysore"];
  const [selectedCity, setSelectedCity] = useState(""); // State to hold the selected city

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCity(selectedValue); // Update selected city
    onSelectChange(selectedValue); // Pass selected value to parent component
  };

  return (
    <div className="mt-1 md:mt-3">
      <div className="relative w-35">
        <select
          className="block appearance-none w-full bg-gray-300 border border-gray-400 hover:border-gray-500 px-3 py-2 pr-8 rounded-sm shadow-md leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 text-sm md:text-base text-gray-800"
          onChange={handleSelectChange}
          value={selectedCity} // Set the value of the select element to selectedCity
          aria-label="Select a city"
        >
          <option value="" key="default" disabled hidden></option>
          {cities.map((city) => (
            <option
              key={city}
              className="text-sm md:text-base text-gray-800 hover:bg-gray-400 hover:text-base-400"
              value={city}
            >
              {city}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 py-2 text-gray-700"></div>
      </div>
    </div>
  );
};

export default Citydropdown;
