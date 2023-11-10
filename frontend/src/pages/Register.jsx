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
    <div className="bg-gradient-to-br from-base-100 to-gray-400 w-full h-screen relative flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 h-[600px] w-[1000px] mx-auto overflow-hidden rounded-lg shadow-2xl"
        id="login-card"
      >
        <div className="relative col-span-1">
          <img
            src={loginImg}
            alt="Login Wash Image"
            className="w-full h-full object-cover"
          />
          <div className="flex justify-center items-center">
            <h1 className="absolute top-96 left-8 text-5xl text-white font-bold">
              Hello There!
            </h1>
            <h1 className="absolute top-[440px] left-9 text-2xl text-white font-semibold">
              Register to create an account.
            </h1>
          </div>
        </div>
        <div className="bg-base-500 flex-wrap flex items-center justify-center">
          <form
            action=""
            onSubmit={handleRegister}
            className="max-w-[700px] w-full mx-auto bg-base-500 p-8 px-16 rounded-lg"
          >
            <h2 className="text-2xl dark:text-gray-200 font-bold text-left">
              REGISTER
            </h2>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="name" className="text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="number" className="text-gray-200">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="email" className="text-gray-200">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmailID(e.target.value)}
                value={emailID}
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="address" className="text-gray-200">
                Address
              </label>
              <textarea
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className="rounded-sm text-base bg-gray-300 mt-2 px-2 py-3 w-[13.8rem] overflow-hidden resize-none h-12 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-1">
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label htmlFor="pincode" className="text-gray-200">
                  Pincode
                </label>
                <input
                  type="number"
                  id="pincode"
                  onChange={(e) => setPincode(e.target.value)}
                  value={pincode}
                  className="rounded-sm text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label htmlFor="state" className="text-gray-200">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  className="rounded-sm text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label htmlFor="city" className="text-gray-200">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  className="rounded-sm text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-between space-x-2 pt-2 text-lg">
              <label htmlFor="password" className="text-gray-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="rounded-sm bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>

            {/* <div className="flex justify-between text-gray-200 my-3">
              <p className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox mr-2 text-blue-500 h-5 w-5"
                />
                Remember Me
              </p>
              <a className="hover:underline hover:cursor-pointer">
                Forgot Password?
              </a>
            </div> */}
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
