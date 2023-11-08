import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import limg from "./assets/login.jpg";

export default function Login() {
  return (
    <div className="bg-gradient-to-br from-base-100 to-gray-400 w-full h-screen relative flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 h-[500px] w-[1000px] mx-auto overflow-hidden rounded-lg shadow-2xl"
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
              Welcome Back!
            </h1>
            <h1 className="absolute top-[440px] left-9 text-2xl text-white font-semibold">
              Please log in to your account.
            </h1>
          </div>
        </div>
        <div className="bg-teal-800 py-8 flex items-center flex-wrap justify-center">
          <form action="">
            <h2 className="text-2xl dark:text-gray-200 font-bold text-left">
              LOGIN
            </h2>
            <div className="flex flex-row items-center justify-between space-x-2  pt-2 text-lg">
              <label htmlFor="emailid" className="text-gray-200">
                Email ID
              </label>
              <input
                type="text"
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2 pt-2 text-lg">
              <label htmlFor="password" className="text-gray-200">
                Password
              </label>
              <input
                type="password"
                className="rounded-sm text-base w-[13.8rem] bg-gray-300 mt-2 px-2 py-3 h-8 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>

            <div className="flex justify-between text-gray-200 my-3">
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
            </div>
            <div className="flex">
              <button
                className="w-44 mx-auto py-2 my-3 text-gray-300 text-xl bg-teal-600 rounded-lg shadow-lg hover:bg-base-600/80"
                type="submit"
              >
                SIGN IN
              </button>
            </div>
          </form>
          <div className="flex justify-center text-gray-300 text-sm space-x-1">
            <p>Don't have an account?</p>
            <Link to="/signup" className="hover:underline hover:cursor-pointer">
              SIGN UP!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
