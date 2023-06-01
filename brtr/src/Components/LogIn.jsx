import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogIn({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(email);
  console.log(password);

  const logIn = (e) => {
    e.preventDefault();

    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(user);
        navigate("/browse");
      });
  };

  return (
    <section className="h-screen   overflow-auto bg-white ">
      <div className="h-screen container px-4 mx-auto  flex items-center">
        <div className="max-w-md mx-auto text-center">
          <Link to="/">
            <a className="flex justify-center" href="#">
              <img
                src="https://static.shuffle.dev/uploads/files/11/1123476d9be8468fa957a4f3118397d3cb484572/image-720-1.png"
                alt=""
                className="h-14"
              />
              <p className="mt-1 text-4xl font-bold">artr</p>
            </a>
          </Link>
          <div className="h-full">
            <h2 className="mb-4 text-6xl font-bold leading-tight text-center md:text-7xl font-heading tracking-px-n">
              Welcome Back
            </h2>
            <p className="mb-12 text-lg font-medium leading-normal text-gray-600">
              Trade Talents, Expand Expertise{" "}
            </p>

            <form>
              <label className="block mb-5">
                <input
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  type="text"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="relative block mb-5">
                <div className="absolute transform -translate-y-1/2 right-4 top-1/2">
                  <a
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  className="px-4 pr-36 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button
                className="w-1/3 py-3 mb-8 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700  rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700"
                type="button"
                onClick={logIn}
              >
                Log In
              </button>
              <p className="font-medium">
                <span>Don’t have an account?</span>
                <Link to="/signup">
                  <a className="text-indigo-600 hover:text-indigo-700" href="#">
                    &nbsp;Create free account
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
