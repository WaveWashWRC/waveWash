import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ImageUpload from '../components/ImageUpload'
import authContext from "../context/AuthContext";

const ProfileById = () => {

  const vendor = useContext(authContext);
  
  if(vendor.isAuthenticated)
  return (
    <div>
      <ImageUpload  maxNumber={3} />
      <div className="p-4 flex justify-evenly flex-wrap">
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">

          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Contact Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and information about the services.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Company Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.companyName}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Owner Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.ownerName}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.emailId}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Contact
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.phoneNumber}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Verification Status
                </dt>
                <dd className={`mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ${vendor.verified ? 'text-green-400' : 'text-red-600'}`}>
                  {vendor.verified ? 'Verified' : 'Pending'}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Location
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Make your services visible to customers
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Street Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.location.address}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  City
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.location.city}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  State
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.location.state}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Pincode
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.location.pincode}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Contact
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {vendor.phoneNumber}
                </dd>
              </div>


            </dl>
          </div>

        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className="w-full bg-white max-w-2xl border border-green-300 shadow overflow-hidden sm:rounded-lg p-4">
          <h1>
            Services
          </h1>

          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Bike Wash
          </span>
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Car Wash
          </span>

        </div>
      </div>
    </div>
  );
};

export default ProfileById;


