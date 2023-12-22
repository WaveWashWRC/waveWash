import React, { useState, useEffect } from "react";
import PerformRequest from "../api/axios";

const ApproveVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVendors = async () => {
    try {
      setLoading(true);
      const response = await PerformRequest(
        "/api/admin/vendors?verify=false",
        "GET"
      );
      setVendors(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vendors:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const approveVendor = async (vendorId) => {
    try {
      setLoading(true);
      await PerformRequest(`/api/admin/approve/${vendorId}`, "PUT");
      // After approving, re-fetch the vendors
      fetchVendors();
    } catch (error) {
      console.error("Error approving vendor:", error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="text-gray-900 text-xl font-bold py-4">
        List of Vendors
      </div>
      {loading ? (
        <p>Loading vendors...</p>
      ) : (
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #000",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  color: "#000",
                }}
              >
                Company Name
              </th>
              <th
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  color: "#000",
                }}
              >
                Email
              </th>
              <th
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  color: "#000",
                }}
              >
                Phone Number
              </th>
              <th
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  color: "#000",
                  textAlign: "center", // Align button content to center
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index}>
                <td
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    color: "#000",
                  }}
                >
                  {vendor.companyName}
                </td>
                <td
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    color: "#000",
                  }}
                >
                  {vendor.emailId}
                </td>
                <td
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    color: "#000",
                  }}
                >
                  {vendor.phoneNumber}
                </td>
                <td
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    color: "#000",
                    textAlign: "center", // Align button to center within the cell
                  }}
                >
                  <button
                    onClick={() => approveVendor(vendor._id)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    style={{ width: "100%" }} // Set button width to 100% of cell
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApproveVendor;
