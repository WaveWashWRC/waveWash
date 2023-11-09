import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import VendorCard from "../components/VendorCard";

const BookService = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Schedule a service.</h1>
      <div className="flex my-4 justify-center items-center gap-x-2 mx-20">
        <input
          type="text"
          className="text-xl py-2 px-3 border-base-200 border-2 rounded-md w-full"
          placeholder="Search for a wash around me"
        />
        <HiOutlineSearch
          className="text-base-200 border-base-200 border-2 hover:border-0 hover:text-white transition-colors duration-75 cursor-pointer hover:bg-gray-200 rounded-full p-2"
          size={40}
        />
      </div>
      <div className="my-4 mx-20">
        <h1 className="text-2xl font-bold text-center">Car Wash</h1>
        <div>
          <VendorCard />
        </div>
      </div>
    </div>
  );
};

export default BookService;
