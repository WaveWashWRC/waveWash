import React, { useState } from "react";
import { Link } from "react-router-dom";
import limg from "./assets/login.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [companyname, setCompanyname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      name,
      companyname,
      email,
      state,
      pincode,
      address,
      city,
      phone,
      password,
    };

    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div className="bg-gradient-to-br from-base-100 to-gray-400 w-full h-screen relative flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 h-[600px] w-[1000px] mx-auto overflow-hidden rounded-lg shadow-2xl"
        id="login-card"
      >
        <div className="relative col-span-1">
          <img
            src={limg}
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
        <div className="bg-teal-800 flex-wrap flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-[700px] w-full mx-auto bg-base-400 p-8 px-16 rounded-lg"
          >
            <h2 className="text-2xl dark:text-gray-200 font-bold text-left">
              REGISTER
            </h2>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="name" className="text-gray-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="name" className="text-gray-200">
                Company Name
              </label>
              <input
                id="companyname"
                type="text"
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                onChange={(e) => setCompanyname(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="number" className="text-gray-200">
                Phone Number
              </label>
              <input
                id="phonenum"
                type="number"
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="email" className="text-gray-200">
                Email ID
              </label>
              <input
                id="email "
                type="email"
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="address" className="text-gray-200">
                Address
              </label>
              <textarea
                id="address"
                className="rounded-sm text-base bg-gray-300 mt-2 px-2 py-3 w-[13.8rem] overflow-hidden resize-none h-12 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-1">
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label htmlFor="pincode" className="text-gray-200">
                  Pincode
                </label>
                <input
                  id="pincode"
                  type="number"
                  className="rounded-sm text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label htmlFor="state" className="text-gray-200">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  className="rounded-sm text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label htmlFor="city" className="text-gray-200">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className="rounded-sm text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-between space-x-2 pt-2 text-lg">
              <label htmlFor="password" className="text-gray-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="rounded-sm bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex">
              <button
                type="submit"
                className="w-44 mx-auto py-2 my-4 text-gray-300 text-xl bg-gray-800 rounded-lg shadow-lg hover:bg-base-600/80"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div className="flex justify-center text-gray-300 text-sm space-x-1">
            <p>Already have an account</p>
            <Link to="/login" className="hover:underline hover:cursor-pointer">
              LOGIN!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
