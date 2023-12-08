import React from "react";

const ApproveTable = () => {
  // Dummy data

  const vendorData = [
    {
      id: 1,
      vendor: "star",
      vendorName: "Alice",
      email: "alice@example.com",
      verificationStatus: "Verified",
      contactNumber: "+1234567890",
    },
    {
      id: 2,
      vendor: "star",
      vendorName: "Bob",
      email: "bob@example.com",
      verificationStatus: "Pending",
      contactNumber: "+1987654321",
    },
    {
      id: 3,
      vendor: "moon",
      vendorName: "Charlie",
      email: "charlie@example.com",
      verificationStatus: "Verified",
      contactNumber: "+9876543210",
    },
    {
      id: 4,
      vendor: "sun",
      vendorName: "David",
      email: "david@example.com",
      verificationStatus: "Pending",
      contactNumber: "+1234567890",
    },
    {
      id: 5,
      vendor: "planet",
      vendorName: "Eve",
      email: "eve@example.com",
      verificationStatus: "Verified",
      contactNumber: "+9876543210",
    },
    {
      id: 6,
      vendor: "star",
      vendorName: "Frank",
      email: "frank@example.com",
      verificationStatus: "Pending",
      contactNumber: "+1234567890",
    },
    {
      id: 7,
      vendor: "moon",
      vendorName: "Grace",
      email: "grace@example.com",
      verificationStatus: "Verified",
      contactNumber: "+9876543210",
    },
    {
      id: 8,
      vendor: "sun",
      vendorName: "Hannah",
      email: "hannah@example.com",
      verificationStatus: "Pending",
      contactNumber: "+1234567890",
    },
  ];

  const handleApprove = (id) => {
    // Logic for approving vendor with the provided ID
    alert("Vendor approved");
    console.log(`Approve vendor with ID: ${id}`);
  };

  const handleReject = (id) => {
    // Logic for rejecting vendor with the provided ID
    console.log(`Reject vendor with ID: ${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-800 px-4 py-2">Vendor</th>
            <th className="border border-gray-800 px-4 py-2">Vendor Name</th>
            <th className="border  border-gray-800 px-4 py-2">Email</th>
            <th className="border border-gray-800 px-4 py-2">
              Verification Status
            </th>
            <th className="border border-gray-800 px-4 py-2">Contact Number</th>
            <th className="border border-gray-800 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendorData.map((vendor) => (
            <tr key={vendor.id}>
              <td className="border border-gray-800 text-gray-900 font-medium px-4 py-2">
                {vendor.vendor}
              </td>
              <td className="border border-gray-800 text-gray-900 font-medium px-4 py-2">
                {vendor.vendorName}
              </td>
              <td className="border border-gray-800 text-gray-900 font-medium px-4 py-2">
                {vendor.email}
              </td>
              <td className="border  border-gray-800 text-gray-900 font-medium px-4 py-2">
                {vendor.verificationStatus}
              </td>
              <td className="border border-gray-800 text-gray-900 font-medium px-4 py-2">
                {vendor.contactNumber}
              </td>
              <td className="border border-gray-800 px-4 py-2 text-center">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                  onClick={() => handleApprove(vendor.id)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => handleReject(vendor.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveTable;
