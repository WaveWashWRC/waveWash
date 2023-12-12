import React, { useState } from "react";
import PerformRequest from "../../api/axios";

const BidComponent = ({ adId }) => {
  const [bidAmount, setBidAmount] = useState("");

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleBidSubmission = async () => {
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
        setBidAmount(""); // Clear the bid amount after submission
      } else {
        window.alert("Failed to submit bid");
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
      window.alert("Failed to submit bid");
    }
  };

  return (
    <div>
      <h2>Place Bid</h2>
      <div>
        <label>Bid Amount:</label>
        <input
          type="number"
          value={bidAmount}
          onChange={handleBidAmountChange}
          placeholder="Enter bid amount"
        />
      </div>
      <div>
        <button onClick={handleBidSubmission}>Submit Bid</button>
      </div>
    </div>
  );
};

export default BidComponent;
