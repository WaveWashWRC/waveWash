import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PerformRequest from "../api/axios";
import AdDetailsCarousel from "../Vendor/components/AdDetailsCarousel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import authContext from "../context/AuthContext";

const BookAd = () => {
  const [userAds, setUserAds] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentUser = useContext(authContext);

  useEffect(() => {
    const fetchUserAds = async () => {
      try {
        const response = await PerformRequest("/api/ad/userads", "GET");
        console.log("API Response:", response);
        if (response && response.length > 0) {
          setUserAds(response);
        } else {
          console.log("No ads found for this user");
        }
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };
    fetchUserAds();
  }, []);

  const handleBookVendor = async (bidder, ad) => {
    const bookingData = {
      vendorId: bidder.vendor._id,
      serviceCategory: ad.services.category,
      bookingDate: selectedDate.toISOString(),
      status: "Pending",
      cost: parseFloat(bidder.cost.$numberDecimal).toFixed(2),
    };
    console.log("Sending Booking Data:", bookingData);

    try {
      const response = await PerformRequest(
        "/api/booking/bookings",
        "POST",
        bookingData
      );
      console.log("Booking successful:", response);
      toast.success("Service Booked!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      toast.error("Service Not Booked!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  if (currentUser?.isAuthenticated) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl text-gray-900 font-bold my-2 mb-6">
          Your Posted Ads
        </h1>
        <div className="flex flex-col gap-6">
          {userAds.map((ad) => (
            <div
              key={ad._id}
              className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <p>
                  <strong>Description:</strong> {ad.desc}
                </p>
                <p>
                  <strong>Service:</strong> {ad.services.category}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  {`${ad.location.address}, ${ad.location.city}`}
                </p>
                <p>
                  <strong>Expires At:</strong>{" "}
                  {new Date(ad.expiresAt).toLocaleString()}
                </p>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">Bidders:</h3>
                {ad.bidders && ad.bidders.length > 0 ? (
                  ad.bidders.map((bidder) => (
                    <div
                      key={bidder._id}
                      className="flex items-start gap-4 mb-4"
                    >
                      <div className="flex-shrink-0">
                        <AdDetailsCarousel
                          images={bidder.vendor?.images || []}
                        />
                      </div>
                      <div className="flex-grow">
                        <p>
                          <strong>Company Name:</strong>{" "}
                          {bidder.vendor?.companyName || "No company name"}
                        </p>
                        <p>
                          <strong>Phone Number:</strong>{" "}
                          {bidder.vendor && bidder.vendor.phoneNumber
                            ? bidder.vendor.phoneNumber
                            : "Phone number not available"}
                        </p>
                        <p>
                          <strong>Email ID:</strong>{" "}
                          {bidder.vendor?.emailId || "Email ID not available"}
                        </p>
                        <p>
                          <strong>Bid:</strong> Rs.{" "}
                          {parseFloat(bidder.cost?.$numberDecimal || 0).toFixed(
                            2
                          )}
                        </p>
                        <p>
                          <strong>Location:</strong>{" "}
                          {bidder.vendor?.location.city || "City not available"}
                          ,{" "}
                          {bidder.vendor?.location.state ||
                            "State not available"}
                        </p>
                        <div className="my-4">
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            className="bg-gray-200 border border-gray-300 text-gray-700"
                            calendarClassName="bg-white border-gray-300"
                          />
                        </div>
                        <button
                          onClick={() => handleBookVendor(bidder, ad)}
                          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No bidders yet.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default BookAd;
