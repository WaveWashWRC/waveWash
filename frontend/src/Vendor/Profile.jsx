import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ImageUpload from '../components/ImageUpload'
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
  "Gardening"
];
const Profile = () => {

  const vendor = useContext(authContext);
  const [profile, setProfile] = useState(vendor);

  function handleSubmit() {
    PerformRequest('/api/profile', 'PUT', profile)
      .then(data => {
        console.log(data);
      })
  }

  console.log(profile);
  function handleServiceSelection(e) {
    let newProfile = { ...profile };
    if (!profile.services.includes(e.target.innerText)) {
      newProfile.services.push(e.target.innerText);
      setProfile(newProfile)
    }
    console.log(profile);
  }
  function removeService(key) {
    let newProfile = { ...profile };
    newProfile.services = newProfile.services.filter((elem, index) => index !== key)
    setProfile(newProfile);
  }

  function handleChanges(e) {
    if (e.target.name.split('.')[0] === 'location') {
      let { location } = profile;
      location[e.target.name.split('.')[1]] = e.target.value;
      setProfile({ ...profile, location });
    }
    else
      setProfile({
        ...profile, ...{
          [e.target.name]: e.target.value
        }
      })
    console.log(profile);
  }
  if (profile.isAuthenticated)
    return (
      <div>
        

        <ImageUpload preSetImages={profile.images} className='block' maxNumber={3} />
        <div className="flex justify-end">
          <button className=" block bg-cyan-500 m-6 hover:bg-cyan-800 px-4 py-2 rounded-md  text-white" onClick={handleSubmit}>Save</button>
        </div>
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
                    <input onChange={handleChanges} name={'companyName'} className="p-1 border" value={profile.companyName} />
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Owner Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input onChange={handleChanges} name={'ownerName'} className="p-1 border" value={profile.ownerName} />
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input disabled onChange={handleChanges} name={"emailId"} className="p-1 border text-gray-500" value={profile.emailId} />
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Contact
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input onChange={handleChanges} name='phoneNumber' className="p-1 border" value={profile.phoneNumber} />
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Verification Status
                  </dt>
                  <dd className={`mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ${profile.verified ? 'text-green-400' : 'text-red-600'}`}>
                    {profile.verified ? 'Verified' : 'Pending'}
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
                    <input onChange={handleChanges} name="location.address" className="p-1 border" value={profile.location.address} />
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    City
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input onChange={handleChanges} name="location.city" className="p-1 border" value={profile.location.city} />
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    State
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input onChange={handleChanges} name="location.state" className="p-1 border" value={profile.location.state} />
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Pincode
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input onChange={handleChanges} name='location.pincode' className="p-1 border" value={profile.location.pincode} />
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Created at
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {moment(profile.createdAt).format('LL')}
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
            {(profile.services.length === 0) && (
              <span
                onClick={handleServiceSelection}
                className="cursor-pointer bg-gray-100 text-grey-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                None⊘
              </span>)}
            {profile.services.map((elem, key) => {
              return (
                <span
                  className="bg-green-100 text-green-800 text-xs font-medium me-2 pl-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  {elem}
                  <button className="ml-2 border border-green-600 text-xsm rounded-full px-1" onClick={() => removeService(key)}>
                    x
                  </button>
                </span>)
            })}
            <div className="border p-2">

              <h1>Pick services</h1>


              {
                serviceCategory.map((elem, key) => {
                  return (
                    <span
                      onClick={handleServiceSelection}
                      className="cursor-pointer bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                      {elem}
                    </span>)
                })}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;


