import React, { useState } from "react";

const Statedropdown = ({ onSelectChange }) => {
  const states = ["Karnataka"];
  const [selectedState, setSelectedState] = useState(""); // State to hold the selected state

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedState(selectedValue); // Update selected state
    onSelectChange(selectedValue);
  };

  return (
    <div className="mt-1 md:mt-3">
      <div className="relative w-35">
        {" "}
        <select
          className="block appearance-none w-full bg-gray-300 border border-gray-400 hover:border-gray-500 px-3 py-2 pr-8 rounded-sm shadow-md leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 text-sm md:text-base text-gray-800"
          onChange={handleSelectChange}
          value={selectedState} // Set the value of the select element to selectedState
          aria-label="Select a state"
        >
          <option value="" key="default" disabled hidden></option>
          {states.map((state) => (
            <option
              key={state}
              className="text-sm md:text-base text-gray-800 hover:bg-gray-400 hover:text-blue-500"
              value={state}
            >
              {state}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 py-2 text-gray-700"></div>
      </div>
    </div>
  );
};

export default Statedropdown;
