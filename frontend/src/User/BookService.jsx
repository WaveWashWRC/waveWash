import React, { useEffect, useState } from "react";
import VendorCard from "../components/VendorCard";
import ServicesDropdown from "./components/ServicesDropdown";
import PerformRequest from "../api/axios";

const BookService = () => {
  const [selectedService, setSelectedService] = useState("");
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleServiceChange = (selectedValue) => {
    setSelectedService(selectedValue);
  };

  // Fetch vendors whenever selectedService changes
  useEffect(() => {
    if (selectedService) {
      setLoading(true);
      PerformRequest(`/api/auth/vendors/by-service/${selectedService}`, "GET")
        .then((response) => {
          console.log("API Response:", response); // Log the entire response

          if (response && Array.isArray(response.vendors)) {
            setVendors(response.vendors);
          } else {
            console.error("Unexpected response structure:", response);
            setVendors([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching vendors:", error);
          setLoading(false);
        });
    }
  }, [selectedService]); // Only re-run the effect if selectedService changes

  return (
    <div className="px-4 py-6 md:px-24 md:py-12 bg-base-100 text-base-400">
      <h1 className="text-xl md:text-2xl font-bold">Schedule a service.</h1>
      <div className="my-2 md:my-5 items-center">
        <ServicesDropdown onSelectChange={handleServiceChange} />
      </div>
      <hr className="bg-base-400/60 h-0.5" />
      {loading ? (
        <div className="text-center mt-5">Loading...</div>
      ) : (
        <div className="my-2 md:my-4 md:mx-5">
          <h1 className="text-base md:text-2xl font-bold text-center md:mt-5 uppercase">
            {selectedService || "Please select a service"}
          </h1>
          <div className="flex flex-col space-y-4">
            {" "}
            {vendors.map((vendor, index) => (
              <VendorCard key={index} vendor={vendor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookService;
