import React from "react";
import { Link, useNavigate } from "react-router-dom";
//new code
const Card = ({ adId, desc, category, images, location, expectedPrice }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Fetch data based on adId
    PerformRequest(`/api/ad/get/${adId}`, "GET").then((data) => {
      // Log the response
      console.log("Fetched data:", data);

      // Pass the data to another component
      navigate(`/ad-details/${adId}`, { state: { adDetails: data } });
    });
  };
  return (
    <div className="bg-gray-100 relative w-full md:w-[400px] h-[340px] overflow-hidden cursor-pointer rounded-md border shadow-lg m-6 p-4">
      <Link onClick={handleClick} style={{ cursor: "pointer" }}>
        <div className="">
          <div className="flex flex-wrap justify-center mb-2">
            <span className="bg-blue-100 inline-block text-blue-800 text-xs font-medium me-2 mb-1 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              {category}
            </span>
            {/* <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 mb-1 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              ₹{expectedPrice}
            </span> */}
          </div>
          <img
            className="block mx-auto mt-2 w-full h-[200px] object-cover rounded"
            src={images[0]}
            alt={desc}
          />
          <h1 className="font-bold p-1 text-center text-lg">{desc}</h1>
          <h1 className="font-bold p-1 text-center text-lg">{location}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;
