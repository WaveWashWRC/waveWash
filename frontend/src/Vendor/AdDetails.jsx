import React from "react";
import { useParams } from "react-router-dom";

const AdDetails = () => {
  const { adId } = useParams(); // Get adId from route parameters
  const [adDetails, setAdDetails] = React.useState(null); // State to store fetched ad details

  React.useEffect(() => {
    // Fetch ad details based on adId
    PerformRequest(`/api/ad/get/${adId}`, "GET").then((data) => {
      setAdDetails(data);
    });
  }, [adId]); // Re-fetch data if adId changes

  if (!adDetails) {
    return <p>Loading...</p>; // Show loading message while data is fetching
  }

  const { desc, category, images, location, expectedPrice, bidders } =
    adDetails;

  // Check if location exists before accessing its properties
  const locationInfo = location
    ? `${location.address || ""}, ${location.city || ""}, ${
        location.state || ""
      } - ${location.pincode || ""}`
    : "Location information not available";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <div className="mb-4">
        <img src={images[0]} alt={desc} className="w-full h-auto rounded" />
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
      {/* Add more details or components to display additional information */}
    </div>
  );
};

export default AdDetails;
