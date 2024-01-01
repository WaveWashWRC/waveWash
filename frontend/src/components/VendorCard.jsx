import React from "react";
import AdDetailsCarousel from "../Vendor/components/AdDetailsCarousel";

const VendorCard = ({ vendor }) => {
  const { companyName, services, location, images } = vendor;

  const service = services.length > 0 ? services[0] : null;
  const price =
    service && service.price ? service.price.$numberDecimal : "Not available";
  const address = location
    ? `${location.address}, ${location.city}, ${location.state}, ${location.pincode}`
    : "Location not available";

  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 mb-4">
      {/* Carousel for images */}
      <AdDetailsCarousel images={images} />

      <div className="px-3 py-2 md:px-6 md:py-4">
        <div className="font-bold text-base md:text-xl md:mb-2 text-gray-900">
          {companyName}
        </div>
        <p className="text-gray-600 text-sm md:text-base">Price: {price}</p>
        <p className="text-gray-600 text-sm md:text-base">Address: {address}</p>

        {/* Book button */}
        <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Book
        </button>
      </div>
    </div>
  );
};

export default VendorCard;
