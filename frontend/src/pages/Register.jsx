import React, { useState } from "react";
import loginImg from "/images/login.jpg";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      phoneNumber,
      emailId: emailID,
      password,
      location: { pincode, state, city, address },
    };

    const response = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="bg-gradient-to-br from-base-100 to-gray-400 h-full relative flex items-center justify-center md:p-10">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 h-[800px] sm:w-[80%] md:w-[70%] mx-auto overflow-hidden rounded-lg shadow-2xl"
        id="login-card"
      >
        <div className="relative col-span-1">
          <img
            src={loginImg}
            alt="Login Wash Image"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-center items-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-xl md:text-5xl font-bold sm:mb-0 md:mb-4">
              Hello There!
            </h1>
            <h1 className="text-base md:text-2xl font-semibold ">
              Register to create an account.
            </h1>
          </div>
        </div>
        <div className="bg-base-500 m-2 md:m-0 p-2 md:py-2 flex items-center flex-wrap justify-center">
          <form
            action=""
            onSubmit={handleRegister}
            className="md:max-w-[700px] w-full mx-auto bg-base-500 md:py-8 px-4 py-2 md:px-16 rounded-lg"
          >
            <h2 className="text-lg md:text-2xl dark:text-gray-200 font-bold text-left mb-1 md:mb-4">
              REGISTER
            </h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 md:pt-2 text-sm md:text-lg mt-1">
              <label
                htmlFor="name"
                className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="rounded-sm md:text-base text-sm bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 md:pt-2 text-sm md:text-lg mt-1">
              <label
                htmlFor="number"
                className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="rounded-sm md:text-base text-sm bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 md:pt-2 text-sm md:text-lg mt-1">
              <label
                htmlFor="email"
                className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmailID(e.target.value)}
                value={emailID}
                className="rounded-sm md:text-base text-sm bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 md:pt-2 text-sm md:text-lg mt-1">
              <label
                htmlFor="address"
                className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className="rounded-sm text-xs md:text-base bg-gray-300 p-2 md:mt-2 md:px-2 md:py-3 overflow-hidden resize-none h-12 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 md:mt-1">
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label
                  htmlFor="pincode"
                  className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
                >
                  Pincode
                </label>
                <input
                  type="number"
                  id="pincode"
                  onChange={(e) => setPincode(e.target.value)}
                  value={pincode}
                  className="rounded-sm md:text-base text-sm bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label
                  htmlFor="state"
                  className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  className="rounded-sm md:text-base text-sm bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label
                  htmlFor="city"
                  className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  className="rounded-sm md:text-base text-sm bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col pt-2 text-lg">
              <label
                htmlFor="password"
                className="sm:text-sm md:text-base text-gray-200 md:mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="rounded-sm bg-gray-300 md:px-2 md:py-3 p-2 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>

            <div className="flex">
              <button className="w-44 mx-auto py-2 my-4 text-gray-300 text-xl bg-base-600 rounded-lg shadow-lg hover:bg-base-600/80">
                SIGN UP
              </button>
            </div>
          </form>
          <div className="flex justify-center text-gray-300 text-sm space-x-1">
            <p>Already have an account?</p>
            <Link to="/login" className="hover:underline hover:cursor-pointer">
              LOGIN!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
