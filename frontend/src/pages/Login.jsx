import React, { useState } from "react";
import loginImg from "/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [cookie, setCookie] = useCookies(["session"]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = { emailId, password };

    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!json.success) {
      setError(json.error);
    }
    if (json.success) {
      setCookie("session", json.token, {
        path: "/",
        maxAge: 3600 * 24 * 30 * 60,
        sameSite: true,
      });
      setEmailId("");
      setPassword("");
      setError(null);
      console.log("New user added", json);
      navigate("/dashboard");
      console.log("Redirected to the dashboard");
    }
  };

  return (
    <div className="bg-gradient-to-br from-base-100 to-gray-400 w-full h-screen relative flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 h-[500px] sm:w-[80%] md:w-[60%] mx-auto overflow-hidden rounded-lg shadow-2xl"
        id="login-card"
      >
        <div className="relative">
          <img
            src={loginImg}
            alt="Login Wash Image"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-center items-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-xl md:text-5xl font-bold sm:mb-0 md:mb-4">
              Welcome Back!
            </h1>
            <h1 className="text-base md:text-2xl font-semibold">
              Please log in to your account.
            </h1>
          </div>
        </div>
        <div className="bg-base-500 m-2 md:m-0 p-2 md:py-8 flex items-center flex-wrap justify-center">
          <form
            className="max-w-[700px] w-full mx-auto bg-base-500 md:py-8 px-4 py-2 md:px-16 rounded-lg"
            onSubmit={handleLogin}
          >
            <h2 className="text-lg md:text-2xl dark:text-gray-200 font-bold text-left mb-1 md:mb-4">
              LOGIN
            </h2>
            <div className="flex flex-col mb-2 md:mb-4">
              <label
                htmlFor="emailid"
                className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
              >
                Email ID
              </label>
              <input
                type="text"
                id="emailid"
                placeholder="johndoe@gmail.com"
                onChange={(e) => setEmailId(e.target.value)}
                value={emailId}
                className="rounded-sm p-2 text-xs md:text-base bg-gray-300 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2 md:mb-4">
              <label
                htmlFor="password"
                className="text-sm md:text-base text-gray-200 mb-1 md:mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="rounded-sm p-2 text-xs md:text-base bg-gray-300 md:py-2 md:px-3 focus:text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </div>

            <div className="flex justify-between text-gray-200 my-3 text-[0.5rem] md:text-sm">
              <p className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox md:mr-1 text-blue-500 w-4 md:w-5"
                />
                Remember Me
              </p>
              <a className="hover:underline hover:cursor-pointer">
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                className="md:w-44 px-4 py-2 md:py-2 text-gray-300 text-sm md:text-xl bg-base-600 rounded-lg shadow-lg hover:bg-base-600/80"
                type="submit"
              >
                SIGN IN
              </button>
            </div>
          </form>
          <div className="flex justify-center text-gray-300 text-[0.6rem] md:text-sm md:mt-4">
            <p>Don't have an account?</p>
            <Link
              to="/register"
              className="hover:underline hover:cursor-pointer ml-1"
            >
              SIGN UP!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
