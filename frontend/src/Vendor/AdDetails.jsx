import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import PerformRequest from "../api/axios";
import AdDetailsCard from "../Vendor/components/AdDetailsCard";

const AdDetails = () => {
  const { adId } = useParams();

  const [loading, setLoading] = useState(true);
  const [adDetails, setAdDetails] = useState(null); // Initialize adDetails as null

  useEffect(() => {
    const fetchAdDetails = async () => {
      try {
        const response = await PerformRequest(`/api/ad/get/${adId}`, "GET");
        console.log(response); // Log the entire response object

        // Check if the response data is valid
        if (response && response.data) {
          setAdDetails(response.data); // Set fetched ad details
        } else {
          console.error("Invalid response format or empty data:", response);
        }
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching ad details:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchAdDetails();
  }, [adId]);

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
        <AdDetailsCard adDetails={adDetails} /> // Pass adDetails as props
      )}
    </div>
  );
};

export default AdDetails;
