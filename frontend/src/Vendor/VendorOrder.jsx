import React, { useState, useEffect } from "react";
import PerformRequest from "../api/axios";

const VendorOrder = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = () => {
      PerformRequest("/api/booking/bookings/vendor", "GET")
        .then((response) => {
          if (response && response.length > 0) {
            setBookings(response);
          } else {
            console.log("No bookings found for this vendor");
          }
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
        });
    };

    fetchBookings();
  }, []);
  const handleAccept = (bookingId) => {
    PerformRequest(`/api/booking/bookings/accept/${bookingId}`, "PUT")
      .then((response) => {
        if (response && response.message === "Booking accepted by the vendor") {
          console.log("Booking accepted:", response);
          alert("Booking has been successfully accepted.");
        } else {
          alert("Failed to accept booking");
        }
      })
      .catch((error) => {
        console.error("Error accepting booking:", error);
        alert("Failed to accept booking");
      });
  };

  const handleCancel = (bookingId) => {
    PerformRequest(`/api/booking/bookings/cancel/${bookingId}`, "PUT")
      .then((response) => {
        if (response && response.message === "Booking cancelled successfully") {
          // Refresh the bookings or update the status in the state
          console.log("Booking cancelled:", response);
          alert("Booking has been successfully cancelled.");
          // Trigger a re-fetch or update local state here
        } else {
          alert("Failed to cancel booking");
        }
      })
      .catch((error) => {
        console.error("Error cancelling booking:", error);
        alert("Failed to cancel booking");
      });
  };

  return (
    <div>
      <h1 className="text-2xl text-gray-900 font-semibold mb-4">
        Vendor Orders
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-gray-100 text-gray-900 p-4 rounded-lg shadow-md"
          >
            <h2 className="text-lg font-semibold">{booking.serviceCategory}</h2>
            <p className="text-gray-900 mb-2">{booking.customerName}</p>
            <p className="text-gray-900 mb-2">
              {new Date(booking.bookingDate).toLocaleString()}
            </p>
            <p className="text-gray-900 mb-2">
              Cost: Rs.{parseFloat(booking.cost.$numberDecimal).toFixed(2)}
            </p>
            <p className="text-gray-900 mb-4">Address: {booking.address}</p>
            <p className="text-gray-900 mb-4">Phone: {booking.phoneNumber}</p>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                onClick={() => handleAccept(booking._id)}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                onClick={() => handleCancel(booking._id)}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorOrder;
