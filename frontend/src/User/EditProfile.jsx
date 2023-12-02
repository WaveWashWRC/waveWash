import React, { useState } from "react";
import { Link } from "react-router-dom";
import authContext from "../context/AuthContext";
import { useContext } from "react";
import ImageUpload from "../components/ImageUpload";
import PerformRequest from "../api/axios";
const EditProfile = () => {
  // Mock user profile data for initial values
  const initialProfileData = useContext(authContext);

  // State to manage form data
  const [profileData, setProfileData] = useState(initialProfileData);

  // Handle form input changes
  const handleInputChange = (e) => {
    if (e.target.name.split('.')[0] === 'location') {
      let { location } = profileData;
      location[e.target.name.split('.')[1]] = e.target.value;
      setProfileData({ ...profileData, location });
    }
    else
      setProfileData({
        ...profileData, ...{
          [e.target.name]: e.target.value
        }
      })
    console.log(profileData);
  };

  // Handle form submission (you can replace this with your API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the updated profileData to the server
    console.log("Profile updated:", profileData);
    PerformRequest(`/api/profile/user`,'PUT',profileData).then(data =>{
      console.log((data))
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="p-5 bg-base-100 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-gray-200 rounded-lg p-5 md:w-[700px] w-full">
      <ImageUpload preSetImages={profileData.images} hitUrl={'/api/upload/image'} className='block' maxNumber={1} />
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
              htmlFor="emailId"
              className="block text-sm md:text-base font-medium text-base-400"
            >
              Email
            </label>
            <input
              disabled
              type="text"
              id="email"
              name="emailId"
              value={profileData.emailId}
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
              name="phoneNumber"
              value={profileData.phoneNumber}
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
              name="location.address"
              value={profileData.location.address}
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
              name="location.state"
              value={profileData.location.state}
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
              name="location.city"
              value={profileData.location.city}
              onChange={handleInputChange}
              className="input input-sm p-2 mt-2 bg-gray-300 text-base-400 md:input-md w-full"
            />
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              onClick={handleSubmit}
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
