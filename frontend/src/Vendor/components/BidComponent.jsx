import React, { useState } from "react";

const BidComponent = ({ onBidSubmit }) => {
  const [bidAmount, setBidAmount] = useState(0); // State to store the bid amount

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare bid data to be submitted
    const bidData = {
      cost: bidAmount,
    };
    // Call the callback function to submit the bid
    onBidSubmit(bidData);
    // Optional: Reset the bid amount input after submission
    setBidAmount(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <h2 className="text-gray-900 font-semibold text-lg mb-4">Place Bid</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="bidAmount"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Bid Amount:
          </label>
          <input
            type="number"
            id="bidAmount"
            name="bidAmount"
            value={bidAmount}
            onChange={handleBidAmountChange}
            placeholder="Enter bid amount"
            className="border border-gray-300 px-2 py-1 rounded-md w-full bg-white text-gray-600"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-md"
          >
            Submit Bid
          </button>
        </div>
      </form>
    </div>
  );
};

export default BidComponent;
