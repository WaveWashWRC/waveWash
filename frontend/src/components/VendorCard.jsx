import React from "react";

const VendorCard = () => {
  return (
    <div>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white">
        <div className="px-3 py-2 md:px-6 md:py-4">
          <div className="font-bold text-base md:text-xl md:mb-2">Name</div>
          <p className="text-gray-700 text-sm md:text-base md:mb-2">
            Price: price
          </p>
          <p className="text-gray-700 text-sm md:text-base md:mb-2">
            Location: location
          </p>
          <p className="text-gray-700 text-sm md:text-base md:mb-2">
            Ratings: ratings
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
