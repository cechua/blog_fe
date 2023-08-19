import React, { useState } from "react";
import axios from "axios";
import localStorageToken from "../util/localStorageToken";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [protectedValue, setProtectedValue] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/login`,
        { username: username, password: password },
        {
          "Content-Type": "application/json",
        }
      );
      console.log(response);
      if (response.data.token != null) {
        localStorageToken.setToken("token", response.data.token);
        window.location.href = "/home";
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getProtectedAPI = () => {
    const token = localStorage.getItem("token");
    if (token != null) {
      fetch("http://localhost:3000/api/protected", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          if (res.status !== 200) setProtectedValue("Unauthorized");
          return null;
        })
        .then((data) => {
          if (data) {
            setProtectedValue(data.result);
          }
        });
    } else {
    }
  };
  return (
    <div className="container mx-auto h-[800px] flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-center h-[400px] w-[400px] flex-col rounded-xl shadow-md">
        <h3 className="font-bold h-[40px]">Login your account!</h3>
        <form onSubmit={handleSubmit} className="w-full px-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* add loading spinner on login */}
          <div className="">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        {/* <button
          onClick={getProtectedAPI}
          className="w-[200px] bg-red-100 cursor"
        >
          TEST BUTTON HANDLE GET PROTECTED API
        </button>
        {protectedValue && <div>{protectedValue}</div>} */}
      </div>
    </div>
  );
};

export default Login;
