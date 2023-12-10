import React from "react";
import CustomButton from "../components/CustomButton";
import AdDetailsCardCarousel from "../components/AdDetailsCarousel";

const AdDetailsCard = ({ adDetails }) => {
  if (!adDetails || adDetails.length === 0) {
    return <div>Loading...</div>;
  }

  const { desc, services, images, location, bidders } = adDetails[0];

  const category = services ? services.category : "N/A";

  const locationInfo = location
    ? `${location.address || ""}, ${location.city || ""}, ${
        location.state || ""
      } - ${location.pincode || ""}`
    : "Location information not available";

  const handleButtonClick = () => {
    alert("Bid posted!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 text-gray-900">
      <div className="mb-6 md:mb-8">
        <AdDetailsCardCarousel images={images} />
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <span className="font-semibold">Service:</span> {category}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Location:</span> {locationInfo}
        </div>
      </div>
      <div className="mb-4">
        <span className="font-semibold">Description:</span> {desc}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Bidders:</span>{" "}
        {bidders ? bidders.length : 0}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add your bid price"
          className="border border-gray-300 px-2 py-1 rounded-md w-full bg-white text-gray-900"
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
