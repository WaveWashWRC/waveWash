import React, { useState, useEffect } from "react";
import PerformRequest from "../api/axios";

const ApproveVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        setLoading(true);
        PerformRequest("/api/admin/vendors", "GET").then((data) => {
          console.log(data);
          setVendors(data);
          setLoading(false);
        });
      } catch (error) {
        console.error("Error fetching vendors:", error);
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div>
      <h2>List of Vendors</h2>
      {loading ? (
        <p>Loading vendors...</p>
      ) : (
        <ul>
          {vendors.map((vendor) => (
            <li key={vendor.id}>{vendor.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApproveVendor;
