import React from "react";
import CustomButton from "./components/CustomButton";

const AdDetails = ({ service, location, description, name }) => {
  const handleButtonClick = () => {
    alert("Bid posted!");
  };

  const imageURL = "https://example.com/image.jpg"; // Replace this with your image URL

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <div className="mb-4">
        <img
          src={imageURL}
          alt="Service Image"
          className="w-20 h-20 rounded-full"
        />
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
        <input
          type="text"
          placeholder="Edit text..."
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
