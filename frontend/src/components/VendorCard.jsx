import React from "react";

const VendorCard = () => {
  return (
    <div>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Vendor</div>
          <p className="text-gray-700 text-base mb-2">Price: price</p>
          <p className="text-gray-700 text-base mb-2">Location: location</p>
          <p className="text-gray-700 text-base mb-2">Ratings: ratings</p>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
