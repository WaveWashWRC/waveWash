import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import PerformRequest from "../api/axios";
import AdDetailsCard from "../Vendor/components/AdDetailsCard";
import BidComponent from "./components/BidComponent";

const AdDetails = () => {
  const { adId } = useParams(); // Updated to adId

  const [loading, setLoading] = useState(true);
  const [adDetails, setAdDetails] = useState(null);

  useEffect(() => {
    const fetchAdDetails = async () => {
      try {
        setLoading(true); // Set loading to true when fetching data
        PerformRequest(`/api/ad/get/${adId}`, "GET").then((data) => {
          console.log(data);
          setAdDetails(data); // Set adDetails directly with fetched data
          setLoading(false); // Set loading to false after data is fetched
        });
      } catch (error) {
        console.error("Error fetching ad details:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchAdDetails();
  }, [adId]);
  const handleBidSubmit = async (bidData) => {
    try {
      // Log the bid data before performing the request
      console.log("Bid data:", bidData);

      // Perform the request to post a bid
      const response = await PerformRequest(
        `/api/ad/bid/create/${adId}`,
        "PUT",
        bidData
      );

      // Log the response to verify if the request is successful
      console.log("Bid submission response:", response);

      // Refresh the ad details after posting the bid
    } catch (error) {
      console.error("Error posting bid:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <HashLoader
          className="absolute mt-[50%] md:mt-[150px] mx-auto align-middle "
          color="#36d7b7"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
        />
      ) : (
        <>
          <AdDetailsCard adDetails={adDetails} />
          <BidComponent onBidSubmit={handleBidSubmit} />
        </>
      )}
    </div>
  );
};

export default AdDetails;
