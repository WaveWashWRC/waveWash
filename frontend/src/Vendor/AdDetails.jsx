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
        setLoading(true);
        PerformRequest(`/api/ad/get/${adId}`, "GET").then((data) => {
          console.log(data);
          setAdDetails(data);
          setLoading(false);
        });
      } catch (error) {
        console.error("Error fetching ad details:", error);
        setLoading(false);
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
        <>
          <AdDetailsCard adDetails={adDetails} />
          <BidComponent adId={adId} />
        </>
      )}
    </div>
  );
};

export default AdDetails;
