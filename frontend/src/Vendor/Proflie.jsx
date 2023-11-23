import React, { useState, useEffect } from "react";
import { useContext } from "react";
import authContext from "../context/AuthContext";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    companyName: "",
    address: "",
    pincode: "",
    image: null,
  });
  const vendor = useContext(authContext);
  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/profile", {
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        console.error("Failed to fetch profile");
        // Handle error - show a message or redirect the user
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Handle error - show a message or redirect the user
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileData({ ...profileData, image: file });
  };

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", profileData.name);
      formData.append("companyName", profileData.companyName);
      formData.append("address", profileData.address);
      formData.append("pincode", profileData.pincode);
      formData.append("image", profileData.image);

      await fetch("/api/profile", {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error - show a message or redirect the user
    }
  };

  return (
    <div className="p-4">
      <div className="text-black">
        <h1>{`CompanyName : ${vendor.companyName}`}</h1>
        <h1>{`ownerName : ${vendor.ownerName}`}</h1>
        <h1>{`emailId : ${vendor.emailId}`}</h1>
        <h1>{`PhoneNo. : ${vendor.phoneNumber}`}</h1>
      </div>
      <h2>Profile</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={profileData.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={profileData.pincode}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button type="button" onClick={handleProfileUpdate}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
