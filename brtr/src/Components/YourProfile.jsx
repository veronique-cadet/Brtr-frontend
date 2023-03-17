import React, { useState } from "react";
import NavBarTwo from "./NavBarTwo";
import Reviews from "./Reviews";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function YourProfile({ user, setUser }) {
  const userSkills = user?.user_skills.map((u_skill) => {
    return (
      <h1 className="text-center bg-gray-100 mb-2 p-2 hover:bg-indigo-200 hover:shadow-2xl  transition duration-200">
        {u_skill.name}
      </h1>
    );
  });
  console.log(userSkills);

  const barterProposedAmount = user?.proposed_barters?.length;
  const barterRecievedAmount = user?.recieved_barters?.length;

  console.log(user?.proposed_barters);

  const barterAmount = barterProposedAmount + barterRecievedAmount;

  return (
    <div className="bg-slate-100">
      <NavBarTwo setUser={setUser} />
      <div className="container p-5 mx-auto my-10 overflow-auto h-screen">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div className="p-3 bg-white border-t-4 border-indigo-400  rounded-3xl  hover:shadow-xl">
              <div className="overflow-hidden image">
                <img
                  className="w-full h-96 mx-auto rounded-xl"
                  src={user?.picture}
                />
              </div>
              <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                {user?.first_name}
              </h1>
              <h3 className="leading-6 text-gray-600 font-lg text-semibold">
                {}
              </h3>
              <p className="text-medium font-light leading-6 text-gray-500 hover:text-gray-600">
                {user?.bio}
              </p>
              <ul className="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow">
                <li className="flex items-center py-3">
                  <span>Rating</span>
                  <span className="ml-auto">
                    <span className="px-2 py-1 text-sm text-white bg-indigo-500 rounded">
                      {user?.rating}/5
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Bartrs</span>
                  <span className="ml-auto">{barterAmount} Bartrs</span>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div className="my-4"></div>
            {/* <!-- Friends card --> */}
            <div className="p-3 bg-white rounded-3xl hover:shadow-xl">
              <div className="flex justify-center items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
                <span className="text-green-500">
                  <img className="h-5" src="./skills2.png" />
                </span>
                <span>Your Skills</span>
              </div>
              <div className="flex flex-col">{userSkills}</div>
              <div className="grid grid-cols-3"></div>
            </div>
            {/* <!-- End of friends card --> */}
          </div>
          {/* <!-- Right Side --> */}
          <div className="w-full h-64 mx-2 md:w-9/12">
            {/* <!-- Profile tab -->
         <!-- About Section --> */}
            <div className="p-3 bg-white rounded-3xl hover:shadow-xl">
              <div className="flex items-center space-x-2 font-bold leading-8 text-indigo-700">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid text-medium md:grid-cols-2">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{user?.first_name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{user?.last_name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">City</div>
                    <div className="px-4 py-2">{user?.city}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">State</div>
                    <div className="px-4 py-2">{user?.state}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {user?.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6 mb-6">
                <Link to="/yourskills">
                  <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:scale-125">
                    Your Skills
                  </button>
                </Link>

                <Link to="/editprofile">
                  <button className="ml-6 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:scale-125">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
            {/* <!-- End of about section --> */}

            {/* Reviews Start */}
            <Reviews user={user} setUser={setUser} />
            {/* Reviews End */}
            {/* <!-- End of profile tab --> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default YourProfile;
