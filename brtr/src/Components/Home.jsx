import React from "react";
import NavBar from "./NavBar";
import Features from "./Features";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="md:h-screen bg-slate-100">
      <NavBar />
      <div className="container mx-auto overflow-hidden  bg-slate-100">
        <div className="md:pt-10 lg:pt-12 overflow-hidden">
          <div className="container px-4 mx-auto  bg-slate-100 lg:mb-5">
            <div className="flex flex-wrap -m-8">
              <div className="w-full pt-8 pl-8 pr-8 pb-2 md:p-8 md:w-1/2 ">
                <h1 className="mb-6 text-4xl sm:max-md:text-5xl text-center md:text-left font-bold text-transparent transition duration-500 ease-in-out first-letter:leading-none md:text-6xl lg:text-7xl font-heading md:max-w-xl bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:scale-105">
                  Barter Your Way to Success
                </h1>
                <p className=" text-sm sm:max-md:text-base md:text-lg font-medium md:mb-11 mb-6 md:max-w-md text-center md:text-left hover:scale-105">
                  Exchange Your Skills, Build Your Network - Join Our Bartering
                  Community Now!
                </p>
                <div className="flex flex-wrap -m-2.5 ">
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <Link to="/signup">
                        <button
                          className="w-full px-4 py-3 lg:px-6 lg:py-4 md:text-sm lg:text-base font-semibold text-white transition duration-500 ease-in-out bg-indigo-500 border border-indigo-500 rounded-xl focus:ring hover:bg-amber-700 hover:scale-110"
                          type="button"
                        >
                          Sign Up for Free!
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* <div className="w-full md:w-auto p-2.5"></div> */}
                </div>

                {/* <div className="flex flex-wrap -m-3">
                  <div className="w-auto p-3"></div>
                  <div className="w-auto p-3"></div>
                  <div className="w-auto p-3"></div>
                </div> */}
              </div>
              <div className="w-full  bg-slate-100 md:w-1/2">
                <img
                  className="mt-4  md:mt-10 lg:mt-8 hover:scale-110"
                  src="./hero2.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;
