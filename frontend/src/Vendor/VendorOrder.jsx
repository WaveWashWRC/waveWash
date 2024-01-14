import React, { useState, useEffect } from "react";
import PerformRequest from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VendorOrder = () => {
  const [bookings, setBookings] = useState([]);
  const [acceptedBookings, setAcceptedBookings] = useState([]);

  useEffect(() => {
    const savedAcceptedBookings =
      JSON.parse(localStorage.getItem("acceptedBookings")) || [];
    setAcceptedBookings(savedAcceptedBookings);

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
          toast.error("Error fetching bookings");
        });
    };

    fetchBookings();
  }, []);

  const handleAccept = (bookingId) => {
    PerformRequest(`/api/booking/bookings/accept/${bookingId}`, "PUT")
      .then((response) => {
        if (response && response.message === "Booking accepted by the vendor") {
          console.log("Booking accepted:", response);
          toast.success("Booking has been successfully accepted.");
          const updatedAcceptedBookings = [...acceptedBookings, bookingId];
          setAcceptedBookings(updatedAcceptedBookings);
          localStorage.setItem(
            "acceptedBookings",
            JSON.stringify(updatedAcceptedBookings)
          );
        } else {
          toast.warn("Failed to accept booking");
        }
      })
      .catch((error) => {
        console.error("Error accepting booking:", error);
        toast.error("Failed to accept booking");
      });
  };

  const handleCancel = (bookingId) => {
    PerformRequest(`/api/booking/bookings/cancel/${bookingId}`, "PUT")
      .then((response) => {
        if (response && response.message === "Booking cancelled successfully") {
          console.log("Booking cancelled:", response);
          toast.info("Booking has been successfully cancelled.");
          const updatedBookings = bookings.filter(
            (booking) => booking._id !== bookingId
          );
          setBookings(updatedBookings);

          const updatedAcceptedBookings = acceptedBookings.filter(
            (id) => id !== bookingId
          );
          setAcceptedBookings(updatedAcceptedBookings);
          localStorage.setItem(
            "acceptedBookings",
            JSON.stringify(updatedAcceptedBookings)
          );
        } else {
          toast.warn("Failed to cancel booking");
        }
      })
      .catch((error) => {
        console.error("Error cancelling booking:", error);
        toast.error("Failed to cancel booking");
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
            <p className="text-gray-900 mb-2 font-medium">
              {booking.customerName}
            </p>
            <p className="text-gray-900 mb-2">
              Date: {new Date(booking.bookingDate).toLocaleString()}
            </p>
            <p className="text-gray-900 mb-2">
              Cost: Rs.{parseFloat(booking.cost.$numberDecimal).toFixed(2)}
            </p>
            <p className="text-gray-900 mb-4">Address: {booking.address}</p>
            <p className="text-gray-900 mb-4">Phone: {booking.phoneNumber}</p>
            <div className="flex justify-between">
              {!acceptedBookings.includes(booking._id) ? (
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  onClick={() => handleAccept(booking._id)}
                >
                  Accept
                </button>
              ) : (
                <button className="bg-green-500 text-white px-3 py-1 rounded">
                  Confirmed
                </button>
              )}
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
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default VendorOrder;
