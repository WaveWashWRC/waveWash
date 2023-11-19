import React, { useState } from "react";
import loginImg from "/images/login.jpg";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import service from '../assets/service.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginVendor = () => {

  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['session']);

  const handleRegister = async (e) => {
    e.preventDefault();

    const payload = {
      emailId: emailID,
      password
    };

    const response = await fetch("http://localhost:8000/api/vendor/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log(data);
    if (data.err) {
      toast.error(data.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else
      setCookie('session', data?.token)
    
  };

  return (
    <div className="bg-gradient-to-br flex-wrap  from-cyan-400 to-base-400  h-screen relative flex items-center w-full justify-between">
      <div className="flex justify-center  ">
        <div >
          <h1 className="font-extrabold text-white  text-6xl p-4">WaveWash for Vendors</h1>
          {/* <p className="font-bold m-2 text-2xl">Get Started in few steps</p> */}
          <img className="shadow-lg sm:block hidden rounded-lg m-2 w-[600px]" src={service} alt="loading.." />
        </div>
      </div>
      <div
        className=" h-[600px] flex justify-center items-center  mx-auto overflow-hidden rounded-lg "
        id="login-card"
      >

        <div className="w-full">
          <form
            action=""
            onSubmit={handleRegister}
            className="border-2   border-blue-400 w-full  mx-auto bg-base-400 p-8 px-16 rounded-lg"
          >
            <h2 className="text-2xl text-gray-200 font-bold text-left">
              Log into your account
            </h2>



            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="email" className="text-gray-200">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                placeholder="smoothgears@gmail.com"
                onChange={(e) => setEmailID(e.target.value)}
                value={emailID}
                className="rounded-sm border text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
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
                className="rounded-sm w-[13.8rem] border bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
                LOGIN
              </button>

            </div>
            <div className="flex justify-center text-gray-300 text-sm space-x-1">
              <p>New to us ?</p>
              <Link to="/register" className="hover:underline hover:cursor-pointer">
                REGISTER
              </Link>
            </div>
          </form>

        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginVendor;
