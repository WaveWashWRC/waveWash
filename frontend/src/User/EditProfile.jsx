import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  // Mock user profile data for initial values
  const initialProfileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    state: "CA",
    city: "Cityville",
    password: "********", // You might want to handle passwords more securely
  };

  // State to manage form data
  const [profileData, setProfileData] = useState(initialProfileData);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (you can replace this with your API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the updated profileData to the server
    console.log("Profile updated:", profileData);
    // Redirect to the user dashboard or profile page after submission
    // history.push("/dashboard"); // Uncomment if using react-router-dom
  };

  return (
    <div className="p-5 bg-base-100 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-gray-200 rounded-lg p-5 md:w-[700px] w-full">
        <h2 className="text-lg md:text-2xl font-bold mb-5 text-base-400">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label
              htmlFor="name"
              className="block text-sm md:text-base font-medium text-base-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type here"
              value={profileData.name}
              onChange={handleInputChange}
              className="input input-sm p-2 mt-2 bg-gray-300 text-base-400 md:input-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm md:text-base font-medium text-base-400"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="input input-sm p-2 mt-2 bg-gray-300 text-base-400 md:input-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm md:text-base font-medium text-base-400"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              className="input input-sm p-2 mt-2 bg-gray-300 text-base-400 md:input-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm md:text-base font-medium text-base-400"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              className="input input-sm p-2 mt-2 bg-gray-300 text-base-400 md:input-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm md:text-base font-medium text-base-400"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={profileData.state}
              onChange={handleInputChange}
              className="input input-sm p-2 mt-2 bg-gray-300 text-base-400 md:input-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm md:text-base font-medium text-base-400"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={profileData.city}
              onChange={handleInputChange}
              className="input input-sm p-2 mt-2 bg-gray-300 text-base-400 md:input-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm md:text-base font-medium text-base-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={profileData.password}
              onChange={handleInputChange}
              className="input input-sm p-2 mt-2 bg-gray-300 text-base-400 md:input-md w-full"
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="btn btn-sm md:btn-md bg-base-300 border-0 text-white text-xs md:text-base px-5 py-2"
            >
              Save Changes
            </button>
            <Link
              to="/dashboard"
              className="ml-3 text-blue-500 text-sm md:text-base"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
