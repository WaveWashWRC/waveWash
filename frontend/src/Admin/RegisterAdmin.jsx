import React, { useState } from "react";
import loginImg from "../assets/loginimg.jpg";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Statedropdown from "../Vendor/components/Statedropdown";
import Citydropdown from "../Vendor/components/Citydropdown";

const RegisterAdmin = () => {
  const [Name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  //   const handleStateChange = (selectedState) => {
  //     setState(selectedState); // Update state value in RegisterAdmin component
  //   };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity); // Update city value in RegisterAdmin component
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      name: Name,
      phoneNumber,
      emailId: emailID,
      password,
      city,
    };

    const response = await fetch(
      "http://localhost:8000/api/auth/admin/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    );

    const data = await response.json();

    console.log(data);
    if (data.err) {
      toast.error(data.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setCookie("session", data?.token);
      window.location.replace("/admindash");
    }
  };

  return (
    <div className="bg-gradient-to-br flex-wrap  from-cyan-600 to-base-400 h-full relative flex items-center justify-center md:p-10">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 h-[666px] sm:w-[80%] md:w-[75%] mx-auto overflow-hidden rounded-lg shadow-2xl"
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
            <h1 className="text-base md:text-2xl font-semibold ">Admin</h1>
          </div>
        </div>
        <div className="bg-base-400 m-2 md:m-0 p-2 md:py-2 flex items-center flex-wrap justify-center">
          <form
            action=""
            onSubmit={handleRegister}
            className="md:max-w-[700px] w-full mx-auto md:py-8 px-2 py-2 md:px-16 rounded-lg text-gray-900"
          >
            <h2 className="text-lg md:text-2xl dark:text-gray-200 font-bold text-left mb-1 md:mb-4">
              REGISTER
            </h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 md:pt-2 text-sm md:text-lg mt-1">
              <label
                htmlFor="Name"
                className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                onChange={(e) => setName(e.target.value)}
                value={Name}
                className="rounded-sm md:text-base p-2 text-xs bg-gray-300 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
                className="rounded-sm md:text-base text-xs bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
                className="rounded-sm md:text-base text-xs bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 md:mt-1">
              {/* <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label
                  htmlFor="state"
                  className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
                >
                  State
                </label>
                <Statedropdown onSelectChange={handleStateChange} />
              </div> */}
              <div className="flex flex-col items-left justify-between pt-2 text-lg">
                <label
                  htmlFor="city"
                  className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
                >
                  City
                </label>
                <Citydropdown onSelectChange={handleCityChange} />
              </div>
            </div>

            <div className="flex flex-col pt-2 text-lg">
              <label
                htmlFor="password"
                className="text-xs md:text-base text-gray-200 mb-2 md:mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="rounded-sm md:text-base text-xs bg-gray-300 p-2 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            {/* <div className="flex flex-col pt-2 text-lg">
              <p className="text-xs md:text-base text-gray-200 mb-2 md:mb-2">
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
              <button className="w-44 mx-auto py-2 my-4 text-gray-300 text-sm md:text-xl bg-blue-600 rounded-lg shadow-lg hover:bg-base-600/80">
                SIGN UP
              </button>
            </div>
          </form>
          <div className="flex justify-center text-gray-300 md:text-sm text-[0.6rem] space-x-1">
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

export default RegisterAdmin;
