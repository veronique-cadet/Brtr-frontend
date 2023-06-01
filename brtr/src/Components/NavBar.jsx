import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container mx-auto overflow-hidden ">
      <div className="flex items-center justify-between pl-3  py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="flex w-auto mr-14">
              <a href="#" className="flex">
                <img src="./logo.png" alt="" className="h-14" />
                <p className="mt-1 text-4xl font-bold ">artr</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-auto lg:block">
              <ul className="flex items-center mr-16">
                <li className="font-medium mr-9 hover:text-gray-700"></li>
                <li className="font-medium mr-9 hover:text-gray-700"></li>
                <li className="font-medium mr-9 hover:text-gray-700"></li>
                <li className="font-medium hover:text-gray-700"></li>
              </ul>
            </div>
            <div className="hidden w-auto md:block">
              <div className="inline-block">
                <Link to="/login">
                  <button
                    className="w-full px-5 py-3 font-medium transition duration-200 ease-in-out bg-transparent hover:text-orange-700 rounded-xl"
                    type="button"
                  >
                    Log In
                  </button>
                </Link>
              </div>
              <div className="inline-block">
                <Link to="/signup">
                  <button
                    className="w-full px-4 py-3 lg:px-5 lg:py-3 md:text-sm lg:text-base font-semibold text-white transition duration-200 ease-in-out bg-amber-500 border-amber-500 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-amber-700"
                    type="button"
                  >
                    Sign Up{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-auto md:hidden">
              <a href="">
                <svg
                  className="text-indigo-600 navbar-burger"
                  width="51"
                  height="51"
                  viewbox="0 0 56 56"
                  fill="none"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="currentColor"
                  ></rect>
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
