import React from "react";
import CustomButton from "../components/CustomButton";
import AdDetailsCardCarousel from "../components/AdDetailsCarousel";

const AdDetailsCard = ({ adDetails }) => {
  if (!adDetails) {
    return <div>Loading...</div>; // Placeholder for when adDetails is null or undefined
  }

  const { desc, category, images, location, bidders } = adDetails;

  // Check if location exists before accessing its properties
  const locationInfo = location
    ? `${location.address || ""}, ${location.city || ""}, ${
        location.state || ""
      } - ${location.pincode || ""}`
    : "Location information not available";

  const handleButtonClick = () => {
    alert("Bid posted!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <div className="mb-4">
        <AdDetailsCardCarousel images={images} />
      </div>
      <div className="mb-4">
        <div className="mb-1">
          <span className="font-semibold text-gray-700">Service:</span>{" "}
          {category}
        </div>
        <div className="mb-1">
          <span className="font-semibold text-gray-700">Location:</span>{" "}
          {locationInfo}
        </div>
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Description:</span> {desc}
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Bidders:</span>{" "}
        {bidders ? bidders.length : 0}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add your bid price"
          className="border border-gray-300 px-2 py-1 rounded-md w-full bg-white text-gray-600"
        />
      </div>
      <div>
        <CustomButton
          onClick={handleButtonClick}
          text="Post Bid"
          additionalClasses="text-xs py-1 px-2"
        />
      </div>
    </div>
  );
};

export default AdDetailsCard;
