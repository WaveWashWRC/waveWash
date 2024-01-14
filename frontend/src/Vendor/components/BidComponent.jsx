import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PerformRequest from "../../api/axios";
import CustomButton from "./CustomButton";

const BidComponent = ({ adId }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleBidSubmission = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await PerformRequest(
        `/api/ad/bid/create/${adId}`,
        "PUT",
        { cost: bidAmount }
      );

      if (response && response.success) {
        setBidAmount("");
        toast.success("Bid submitted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(response.message || "Failed to submit bid.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
      toast.error("Failed to submit bid. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsSubmitting(false);
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
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default BidComponent;
