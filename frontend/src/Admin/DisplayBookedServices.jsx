import React, { useState, useEffect } from "react";
import PerformRequest from "../api/axios";

const DisplayBookedServices = () => {
  const [confirmedServices, setConfirmedServices] = useState([]);

  useEffect(() => {
    const fetchConfirmedServices = async () => {
      try {
        const response = await PerformRequest(
          "/api/booking/bookings/confirmed/vendor",
          "GET"
        );
        setConfirmedServices(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching confirmed services:", error);
      }
    };

    fetchConfirmedServices();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className="text-gray-900 text-xl font-bold py-5">
        Confirmed Services
      </div>

      {confirmedServices.map((service) => (
        <div
          key={service._id}
          className="text-black w-full border-2 border-base-200 p-4 rounded-lg mb-3"
        >
          <div className="font-bold">{service.serviceCategory}</div>
          <ul>
            <li>
              Service By: {service.vendorId && service.vendorId.companyName}
            </li>
            <li>
              Customer Name: {service.customerId && service.customerId.name}
            </li>
            <li>Booking Date: {formatDate(service.bookingDate)}</li>
            <li>
              Cost: ₹
              {parseFloat(service.cost.$numberDecimal).toLocaleString("en-IN")}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DisplayBookedServices;
