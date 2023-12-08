import React from "react";

const VendorOrder = () => {
  // Dummy data
  const dummyData = [
    {
      id: 1,
      customerName: "John Doe",
      address: "123 Main Street",
      phoneNumber: "+1234567890",
      serviceType: "Standard Wash",
      time: "2023-12-15 10:00 AM",
    },
    {
      id: 2,
      customerName: "Alice Smith",
      address: "456 Elm Street",
      phoneNumber: "+1987654321",
      serviceType: "Premium Wash",
      time: "2023-12-16 11:30 AM",
    },
    // Add more dummy data items as needed
  ];

  const handleDone = (orderId) => {
    // Logic for marking order as done
    console.log(`Order ${orderId} marked as done`);
    // Add logic to handle marking orders as done
  };

  return (
    <div>
      <h1 className="text-2xl text-gray-900 font-semibold mb-4">
        Vendor Orders
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyData.map((order) => (
          <div
            key={order.id}
            className="bg-gray-100 text-gray-900 p-4 rounded-lg shadow-md"
          >
            <h2 className="text-lg font-semibold">{order.customerName}</h2>
            <p className="text-gray-900 mb-2">{order.address}</p>
            <p className="text-gray-900 mb-2">{order.phoneNumber}</p>
            <p className="text-gray-900 mb-2">{order.serviceType}</p>
            <p className="text-gray-900 mb-2">{order.time}</p>
            <button
              className="bg-green-600 text-white px-3 py-1 rounded mr-2"
              onClick={() => handleDone(order.id)}
            >
              Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorOrder;
