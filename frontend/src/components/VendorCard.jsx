import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AdDetailsCarousel from "../Vendor/components/AdDetailsCarousel";
import authContext from "../context/AuthContext";
import PerformRequest from "../api/axios";

const VendorCard = ({ vendor }) => {
  const currentUser = useContext(authContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBooking = async () => {
    const selectedService = vendor.services[0];

    const bookingData = {
      vendorId: vendor._id,
      serviceCategory: selectedService.category,
      bookingDate: selectedDate.toISOString(),
      status: "Pending",
      cost: selectedService.price,
    };

    PerformRequest("/api/booking/bookings", "POST", bookingData)
      .then((response) => {
        console.log("Booking response:", response);
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
      });
  };

  const { companyName, services, location, images } = vendor;
  const service = services.length > 0 ? services[0] : null;
  const price =
    service && service.price ? service.price.$numberDecimal : "Not available";
  const address = location
    ? `${location.address}, ${location.city}, ${location.state}, ${location.pincode}`
    : "Location not available";

  if (currentUser?.isAuthenticated) {
    return (
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 mb-4">
        <AdDetailsCarousel images={images} />
        <div className="px-3 py-2 md:px-6 md:py-4">
          <div className="font-bold text-base md:text-xl md:mb-2 text-gray-900">
            {companyName}
          </div>
          <p className="text-gray-600 text-sm md:text-base">Price: {price}</p>
          <p className="text-gray-600 text-sm md:text-base">
            Address: {address}
          </p>

          {/* Date Picker */}
          <div className="my-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="bg-gray-200 border border-gray-300 text-gray-700"
              calendarClassName="bg-white border-gray-300"
            />
          </div>

          <button
            onClick={handleBooking}
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Book
          </button>
        </div>
      </div>
    );
  }
};

export default VendorCard;
