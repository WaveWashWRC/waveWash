import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      toast.success("Vendor approved!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      fetchVendors();
    } catch (error) {
      console.error("Error approving vendor:", error);
      toast.error("Vendor not approved.", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
        <table className="border-collapse w-full border-2 border-black">
          <thead>
            <tr className="border-2 border-black">
              <th className="border-2 border-black p-2 text-gray-900">
                Company Name
              </th>
              <th className="border-2 border-black p-2 text-gray-900">Email</th>
              <th className="border-2 border-black p-2 text-gray-900">
                Phone Number
              </th>
              <th className="border-2 border-black p-2 text-gray-900 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index} className="border-2 border-black">
                <td className="border-2 border-black p-2 text-gray-900">
                  {vendor.companyName}
                </td>
                <td className="border-2 border-black p-2 text-gray-900">
                  {vendor.emailId}
                </td>
                <td className="border-2 border-black p-2 text-gray-900">
                  {vendor.phoneNumber}
                </td>
                <td className="border-2 border-black p-2 text-gray-900 text-center">
                  <button
                    onClick={() => approveVendor(vendor._id)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
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
