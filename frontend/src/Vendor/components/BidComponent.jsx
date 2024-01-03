import React, { useState, useEffect } from "react";
import PerformRequest from "../../api/axios";
import CustomButton from "./CustomButton";

const BidComponent = ({ adId }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleBidSubmission = async () => {
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    try {
      const response = await PerformRequest(
        `/api/ad/bid/create/${adId}`,
        "PUT",
        {
          cost: bidAmount,
        }
      );

      if (response && response.success) {
        window.alert("Bid submitted successfully!");
        setBidAmount("");
      } else {
        window.alert("Failed to submit bid");
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
      window.alert("Failed to submit bid");
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 text-gray-900">
      <div className="mb-4">
        <label className="font-semibold">Bid Amount:</label>
        <div className="mb-4">
          <input
            className="border rounded-md p-2 w-full bg-white"
            type="number"
            value={bidAmount}
            onChange={handleBidAmountChange}
            placeholder="Enter bid amount"
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div>
        <CustomButton
          onClick={handleBidSubmission}
          text={isSubmitting ? "Submitting..." : "Submit Bid"}
          className="w-full"
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};
export default BidComponent;
