import React, { useState } from "react";

const CheckServices = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-base-100 text-base-400 px-4 py-6 sm:px-7 sm:py-10 md:px-24 md:py-12">
      <h2 className="flex items-center justify-center font-bold text-lg md:text-3xl mb-2">
        Your Bookings
      </h2>
      <div className="my-2">
        <div className="my-1 md:text-lg">Current</div>
        <ul>
          <li className="text-xs md:text-base border-2 border-gray-400 hover:border-base-300 rounded-md p-2 md:w-96">
            <h1 className="font-bold md:text-base">CAR WASH</h1>
            <div className="flex flex-col md:flex-row justify-between mt-1">
              <h2>
                Status: <span className="text-green-900 font-bold">Booked</span>
              </h2>
              <p>Vendor: -</p>
            </div>
          </li>
        </ul>
      </div>
      <hr className="h-0.5 bg-base-400 my-3 md:my-5" />
      <div>
        <div className="my-1 md:text-lg">History</div>
        <ul>
          <li className="text-xs md:text-base border-2 border-gray-400 hover:border-base-300 rounded-md p-2 md:w-96">
            <h1 className="font-bold md:text-base">CAR WASH</h1>
            <div className="flex flex-col md:flex-row justify-between mt-1">
              <h2>
                Status: <span className="text-green-900 font-bold">Booked</span>
              </h2>
              <p>Vendor: -</p>
            </div>
            <div>
              Date: <span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckServices;
