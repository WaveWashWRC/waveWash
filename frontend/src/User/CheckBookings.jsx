import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PerformRequest from "../api/axios";

const CheckServices = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    PerformRequest("/api/booking/bookings", "GET")
      .then((data) => {
        setBookings(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  const handleCancel = (bookingId) => {
    PerformRequest(`/api/booking/bookings/${bookingId}`, "DELETE")
      .then((response) => {
        console.log("Booking cancelled:", response);
        setBookings(bookings.filter((booking) => booking._id !== bookingId));
        toast.success("Booking cancelled!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.error("Error cancelling booking:", error);
        toast.error("Error cancelling booking!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <div className="bg-base-100 text-base-400 px-4 py-6 sm:px-7 sm:py-10 md:px-24 md:py-12">
      <h2 className="flex items-center justify-center font-bold text-lg md:text-3xl mb-2">
        Your Bookings
      </h2>
      <div className="my-2 flex justify-center">
        <ul>
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="text-xs md:text-base border-2 border-gray-400 hover:border-base-300 rounded-md p-2 md:w-96 mb-4 flex flex-col justify-between" // Use flex-col for column direction
            >
              <div>
                <h1 className="font-bold md:text-base">
                  {booking.serviceCategory} by {booking.vendorName}
                </h1>
                <div className="flex flex-col md:flex-row justify-between mt-1">
                  <h2>
                    Status:{" "}
                    <span
                      className={`text-${
                        booking.status === "Pending" ? "yellow" : "green"
                      }-600 font-bold`}
                    >
                      {booking.status}
                    </span>
                  </h2>
                </div>
                <div>
                  Date:{" "}
                  <span>
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  Cost:{" "}
                  <span>
                    Rs.{parseFloat(booking.cost.$numberDecimal).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                {" "}
                <button
                  onClick={() => handleCancel(booking._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Cancel
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default CheckServices;
