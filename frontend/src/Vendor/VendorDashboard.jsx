import React from "react";
import authContext from "../context/AuthContext";
import { useContext } from "react";
import VendorSidebar from "../components/VendorSidebar";
import { VendorHeader } from "../components/VendorHeader";
import { Outlet } from "react-router-dom";

const VendorDashboard = () => {
  const vendor = useContext(authContext);
  console.log("vendor", vendor);
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <VendorSidebar />
      <div className="p-4 flex-1 flex flex-col">
        <VendorHeader />
        <div className="flex-1 overflow-y-auto">
          <div className="text-black">
            <h1>{`CompanyName : ${vendor.companyName}`}</h1>
            <h1>{`ownerName : ${vendor.ownerName}`}</h1>
            <h1>{`emailId : ${vendor.emailId}`}</h1>
            <h1>{`PhoneNo. : ${vendor.phoneNumber}`}</h1>
          </div>

          <Outlet />
        </div>
        {/* <p>flooter</p> */}
      </div>
    </div>
  );
};

export default VendorDashboard;
