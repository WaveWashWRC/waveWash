import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ImageUpload from "../components/ImageUpload";
import authContext from "../context/AuthContext";
import moment from "moment";
import PerformRequest from "../api/axios";

const serviceCategory = [
  "Car wash - Hatchback",
  "Car wash - Sedan",
  "Car wash - SUV",
  "Bike wash",
  "Tank and Sump wash",
  "Aquarium wash",
  "Pet wash",
  "Bathroom and Tiles cleaning",
  "Carpet, Sofa, and curtain cleaning",
  "Gardening",
];

const Profile = () => {
  const vendor = useContext(authContext);
  const [profile, setProfile] = useState(vendor);

  function handleSubmit() {
    PerformRequest("/api/profile", "PUT", profile)
      .then((data) => {
        console.log("Profile Update Response:", data);
      })
      .catch((error) => {
        console.error("Failed to update profile:", error.response.data);
      });
  }

  function handleServiceSelection(e) {
    const serviceToAdd = e.target.getAttribute("data-service");
    let newProfile = { ...profile };
    if (
      !profile.services.some((service) => service.category === serviceToAdd)
    ) {
      newProfile.services.push({ category: serviceToAdd, price: "" });
      setProfile(newProfile);
    }
  }

  function removeService(key) {
    let newProfile = { ...profile };
    newProfile.services = newProfile.services.filter(
      (elem, index) => index !== key
    );
    setProfile(newProfile);
  }

  function handleChanges(e) {
    if (e.target.name.split(".")[0] === "location") {
      let { location } = profile;
      location[e.target.name.split(".")[1]] = e.target.value;
      setProfile({ ...profile, location });
    } else {
      setProfile({
        ...profile,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handlePriceChange(e, key) {
    const newPrice = e.target.value;
    const newServices = profile.services.map((service, index) => {
      if (index === key) {
        return { ...service, price: newPrice };
      }
      return service;
    });
    setProfile({ ...profile, services: newServices });
  }

  if (profile.isAuthenticated) {
    return (
      <div className="bg-gray-100 min-h-screen p-8">
        <ImageUpload
          preSetImages={profile.images}
          hitUrl={"/api/upload/image"}
          className="block mb-8"
          maxNumber={3}
        />
        <div className="flex justify-end mb-4">
          <button
            className="bg-cyan-500 hover:bg-cyan-800 px-4 py-2 rounded-md text-white font-semibold"
            onClick={handleSubmit}
          >
            Save Profile
          </button>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-4 mb-4">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    onChange={handleChanges}
                    value={profile.companyName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Owner Name
                  </label>
                  <input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    required
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    onChange={handleChanges}
                    value={profile.ownerName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="emailId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="emailId"
                    name="emailId"
                    type="email"
                    disabled
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    onChange={handleChanges}
                    value={profile.emailId}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    onChange={handleChanges}
                    value={profile.phoneNumber}
                  />
                </div>
                <div>
                  <label
                    htmlFor="verificationStatus"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Verification Status
                  </label>
                  <input
                    id="verificationStatus"
                    name="verificationStatus"
                    type="text"
                    disabled
                    className={`mt-1 p-2 border ${
                      profile.verified ? "bg-green-100" : "bg-red-100"
                    } text-gray-900 w-full rounded-md`}
                    value={profile.verified ? "Verified" : "Pending"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Location Information */}
          <div className="w-full lg:w-1/2 px-4 mb-4">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Location
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street Address
                  </label>
                  <input
                    id="address"
                    name="location.address"
                    type="text"
                    required
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    onChange={handleChanges}
                    value={profile.location.address}
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    name="location.city"
                    type="text"
                    required
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    onChange={handleChanges}
                    value={profile.location.city}
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    id="state"
                    name="location.state"
                    type="text"
                    required
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    onChange={handleChanges}
                    value={profile.location.state}
                  />
                </div>
                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pincode
                  </label>
                  <input
                    id="pincode"
                    name="location.pincode"
                    type="text"
                    required
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    onChange={handleChanges}
                    value={profile.location.pincode}
                  />
                </div>
                <div>
                  <label
                    htmlFor="createdAt"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Created at
                  </label>
                  <input
                    id="createdAt"
                    name="createdAt"
                    type="text"
                    disabled
                    className="mt-1 p-2 border bg-gray-100 text-gray-900 w-full rounded-md"
                    value={moment(profile.createdAt).format("LL")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section */}
        <div className="w-full flex justify-center">
          <div className="w-full bg-white shadow rounded-lg p-6">
            <h1 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Services
            </h1>
            {profile.services.length === 0 && <div>No services selected</div>}
            {profile.services.map((service, key) => (
              <div key={service._id || key} className="flex items-center mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  {service.category}
                </span>
                <input
                  type="text"
                  placeholder="Price"
                  value={service.price ? service.price.toString() : ""}
                  className="border p-1 text-xs text-gray-900 w-20 mr-2 bg-gray-100"
                  onChange={(e) => handlePriceChange(e, key)}
                />
                <button
                  className="ml-2 border border-red-600 text-xs rounded-full px-2 text-red-600"
                  onClick={() => removeService(key)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <h1 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Pick services
              </h1>
              {serviceCategory.map((service, key) => (
                <span
                  key={key}
                  data-service={service}
                  onClick={handleServiceSelection}
                  className="cursor-pointer bg-purple-100 text-purple-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 inline-block"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Profile;
