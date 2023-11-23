import React, { useState } from "react";
import loginImg from "/images/login.jpg";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import service from '../assets/service.jpg'
const RegisterVendor = () => {
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['session']);

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      companyName,
      ownerName,
      phoneNumber,
      emailId:emailID,
      password,
      location: { pincode, state, city, address },
    };

    const response = await fetch("http://localhost:8000/api/auth/vendor/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    
    console.log(data);
    if (data.err) {
      toast.error(data.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else
      {setCookie('session', data?.token)
       window.location.replace('/dashboard')}
  };

  return (
    <div className="bg-gradient-to-br flex-wrap  from-cyan-400 to-base-400  h-screen relative flex items-center w-full justify-between">
      <div className="flex justify-center  ">
        <div >
        <h1 className="font-extrabold text-white  text-6xl p-4">WaveWash for Vendors</h1>
        {/* <p className="font-bold m-2 text-2xl">Get Started in few steps</p> */}
        <img className="shadow-lg md:block hidden rounded-lg m-2 w-[600px]" src={service} alt="loading.."/>
        </div>
      </div>
      <div
        className=" h-[600px]  mx-auto overflow-hidden rounded-lg l"
        id="login-card"
      >
        
        <div >
          <form
            action=""
            onSubmit={handleRegister}
            className="border-2 border-blue-400 max-w-[600px] w-full mx-auto bg-base-400 p-8 px-16 rounded-lg"
          >
            <h2 className="text-2xl text-gray-200 font-bold text-left">
              REGISTER
            </h2>
            <div className="flex  flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="name" className="text-gray-200">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
                className="rounded-sm  text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 border focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="ownerName" className="text-gray-200">
                Owner Name
              </label>
              <input
                type="text"
                id="ownerName"
                onChange={(e) => setOwnerName(e.target.value)}
                value={ownerName}
                className="rounded-sm border text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="number" className="text-gray-200">
                Phone Number
              </label>
              <input
                type="text"
                id="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="rounded-sm  border text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
                className="rounded-sm border text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="address" className="text-gray-200">
                Street Address
              </label>
              <textarea
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className="rounded-sm border text-base bg-gray-300 mt-2 px-2 py-3 w-[13.8rem] overflow-hidden resize-none h-12 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
                  className="rounded-sm border text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
                  className="rounded-sm border text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
                  className="rounded-sm border text-base bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
                className="rounded-sm border bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
              <button className="w-44 border border-white hover:bg-cyan-800 mx-auto py-2 my-4  text-gray-300 text-xl bg-base-600 rounded-lg shadow-lg hover:bg-base-600/80">
                SIGN UP
              </button>
              
            </div>
            <div className="flex justify-center text-gray-300 text-sm space-x-1">
            <p>Already have an account?</p>
            <Link to="/login" className="hover:underline hover:cursor-pointer">
              LOGIN!
            </Link>
          </div>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default RegisterVendor;
