import React from "react";
import CustomButton from "./components/CustomButton";
import AdDetailsCarousel from "./components/AdDetailsCarousel";

const AdDetails = ({ service, location, description, name, bidders }) => {
  const handleButtonClick = () => {
    alert("Bid posted!");
  };
  const images = [
    "https://www.topgear.com/sites/default/files/2022/07/13.jpg",
    "https://www.caranddriving.com/cdwebsite/image169.ashx?url=https://ssl.caranddriving.com/f2/images/New/big/bmwi40423.jpg",
    "https://images.nettiauto.com/live/2023/10/12/82cf47c68848b5f7-large.jpg",
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <div className="mb-4">
        <AdDetailsCarousel images={images} />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <div className="mb-1">
          <span className="font-semibold text-gray-700">Service:</span>{" "}
          {service}
        </div>
        <div className="mb-1">
          <span className="font-semibold text-gray-700">Location:</span>{" "}
          {location}
        </div>
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Description:</span>{" "}
        {description}
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Bidders:</span> {bidders}
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

export default AdDetails;
