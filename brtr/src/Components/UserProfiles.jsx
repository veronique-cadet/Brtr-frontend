import React, { useState, useEffect } from "react";
import NavBarTwo from "./NavBarTwo";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Reviews from "./Reviews";
import OtherSkilledUsers from "./OtherSkilledUsers";

function UserProfiles({ user, setUser, yourBarters, setYourBarters }) {
  const [userProfile, setUserProfile] = useState({});
  const [isClicked, setIsClicked] = useState(true);
  const [skills, setSkills] = useState([]);
  const [userSkill, setUserSkill] = useState("");
  const [proposerHours, setProposerHours] = useState("");
  const [recipientHours, setRecipientHours] = useState("");
  const [barterClicked, setBarterClicked] = useState(true);
  const [otherUsers, setOtherUsers] = useState([]);

  const skill = useLocation();
  const { from } = skill.state?.from;
  const id = skill.state?.from.id;
  console.log(id);

  useEffect(() => {
    fetch(`/user_skills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserProfile(data);
        console.log(data);
      });
  }, []);

  const handleSubmit = () => {
    fetch("/barters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProposedBarter),
    })
      .then((response) => response.json())
      .then(() => {
        setYourBarters([...yourBarters, newProposedBarter]);
        console.log(newProposedBarter);
      });
  };

  const newProposedBarter = {
    proposer_id: user?.id,
    recipient_id: userProfile?.user?.id,
    recipient_skill_id: userProfile?.id,
    proposer_skill_id: parseInt(userSkill),
    agreed: false,
    proposer_hours: proposerHours,
    recipient_hours: recipientHours,
  };

  const userSkills = user?.user_skills.map((u_skill) => {
    return (
      <option key={u_skill.id} value={u_skill.id}>
        {u_skill.name}
      </option>
    );
  });
  console.log(userSkills);

  useEffect(() => {
    fetch("/user_skills")
      .then((res) => res.json())
      .then((data) => {
        setOtherUsers(data);
        console.log(data);
      });
  }, []);

  const filteredOtherUsers = otherUsers.filter((otherUser) => {
    if (
      otherUser.skill.id === userProfile.skill.id &&
      otherUser.user.id !== user?.id &&
      otherUser.user.id !== userProfile?.user?.id
    ) {
      return true;
    }
    return false;
  });

  console.log(filteredOtherUsers);

  const userCard = filteredOtherUsers.slice(0, 6).map((skilledOtherUser) => {
    return (
      <OtherSkilledUsers
        skilledOtherUser={skilledOtherUser}
        key={skilledOtherUser.id}
        id={skilledOtherUser.id}
        setUserProfile={setUserProfile}
      />
    );
  });

  console.log(userCard);

  //   const userOtherSkills = userProfile.ski.map((ski)=>{return <h1 key={ski?.id} ski={ski} className="text-center bg-gray-100 mb-2 p-2 hover:bg-indigo-200 hover:shadow-2xl  transition duration-200">{ski}</h1>})



 const barterProposedAmount = userProfile?.proposed_barters?.length
 const barterRecievedAmount = userProfile?.recieved_barters?.length

//  const pTrue = (userProfile?.proposed_barters?.agreed === true).length
//  const bTrue = (userProfile?.received_barters?.agreed === true).length
 const barterAmount = barterProposedAmount + barterRecievedAmount

 console.log(barterAmount)

  return (
    <div className="bg-slate-100">
      <NavBarTwo setUser={setUser} />
      {isClicked ? (
        <div className="container p-5 mx-auto my-10 overflow-auto h-screen">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <div className="p-3 bg-white border-t-4 border-indigo-400  rounded-3xl  hover:shadow-xl">
                <div className="overflow-hidden image">
                  <img
                    className="w-full h-96 mx-auto rounded-xl"
                    src={userProfile?.user?.picture}
                  />
                </div>
                <h1 className="my-1 text-xl font-bold leading-8 text-slate-900">
                  {userProfile?.user?.first_name}
                </h1>
                <h3 className="leading-6 text-indigo-700 font-lg font-bold text-semibold mb-2">
                  {userProfile?.skill?.name}
                </h3>
                <p className="text-medium font-light leading-6 text-slate-500 hover:text-slate-600">
                  {userProfile?.user?.bio}
                </p>
                <ul className="px-3 py-2 mt-3 text-slate-600 bg-slate-100 divide-y rounded shadow-sm hover:text-slate-700 hover:shadow">
                  <li className="flex items-center py-3">
                    <span contenteditable="false">Rating</span>
                    <span className="ml-auto">
                      <span className="px-2 py-1 text-sm text-white bg-indigo-500 rounded">
                        {userProfile?.user?.rating}/5
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span contenteditable="false">Bartrs</span>
                    <span className="ml-auto">{barterAmount} Bartrs</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
              {/* <!-- Friends card --> */}
              <div className="p-3 bg-white hover:shadow rounded-3xl">
                <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-slate-900">
                  <span className="text-green-500">
                    <svg
                      className="h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </span>
                  <span>Similar Profiles</span>
                </div>
                <div class="grid grid-cols-3">{userCard}</div>
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
                  <span className="tracking-wide ">About</span>
                </div>
                <div className="text-slate-700">
                  <div className="grid text-medium md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">
                        {userProfile?.user?.first_name}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">
                        {userProfile?.user?.last_name}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">City</div>
                      <div className="px-4 py-2">{userProfile?.user?.city}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">State</div>
                      <div className="px-4 py-2">
                        {userProfile?.user?.state}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          {userProfile?.user?.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-6 mb-6">
                  <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:scale-125">
                    Message
                  </button>
                  <button
                    onClick={() => setIsClicked(!isClicked)}
                    className="inline-block px-6 py-3 ml-6 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:scale-125"
                  >
                    Propose Bartr
                  </button>
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- User Skill Info --> */}
              <div className="p-3 bg-white rounded-3xl hover:shadow-xl">
                <div className="flex items-center space-x-2 font-bold leading-8 text-indigo-700">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
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
                  <span className="tracking-wide">Skill Information</span>
                </div>
                <div className="text-slate-700">
                  <div className="grid text-medium md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Years of Experience
                      </div>
                      <div className="px-4 py-2">
                        {userProfile?.years_exp === 1
                          ? userProfile?.years_exp + " year"
                          : userProfile?.years_exp + " years"}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Professional Link
                      </div>
                      <div className="px-4 py-2">{userProfile?.proof_url}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Skill Bio</div>
                      <div className="px-4 py-2">{userProfile?.proof_des}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- End --> */}

              {/* <!-- Other Skills --> */}
              <div className="p-3 bg-white rounded-3xl hover:shadow-xl mt-5">
                <div className="flex items-center space-x-2 font-bold leading-8 text-indigo-700">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
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
                  <span className="tracking-wide">Other Skills</span>
                </div>
                <div className="text-slate-700">{/* {userOtherSkills} */}</div>
              </div>

              {/* Reviews Start */}
              <Reviews userProfile={userProfile} />
              {/* Reviews End */}
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      ) : (
        // start of second //
        // start of second //
        // start of second //
        // start of second //
        // start of second //
        // start of second //
        // start of second //
        // start of second //
        // start of second //
        <div className="container p-5 mx-auto my-10 overflow-auto h-screen">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <div className="p-3 bg-white border-t-4 border-indigo-400  rounded-3xl  hover:shadow-xl">
                <div className="overflow-hidden image">
                  <img
                    className="w-full h-96 mx-auto rounded-xl"
                    src={userProfile?.user?.picture}
                  />
                </div>
                <h1 className="my-1 text-xl font-bold leading-8 text-slate-900">
                  {userProfile?.user?.first_name}
                </h1>
                <h3 className="leading-6 text-indigo-700 font-lg font-bold text-semibold mb-2">
                  {userProfile?.skill?.name}
                </h3>
                <p className="text-medium font-light leading-6 text-slate-500 hover:text-slate-600">
                  {userProfile?.user?.bio}
                </p>
                <ul className="px-3 py-2 mt-3 text-slate-600 bg-slate-100 divide-y rounded shadow-sm hover:text-slate-700 hover:shadow">
                  <li className="flex items-center py-3">
                    <span contenteditable="false">Rating</span>
                    <span className="ml-auto">
                      <span className="px-2 py-1 text-sm text-white bg-indigo-500 rounded">
                        {userProfile?.user?.rating}/5
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span contenteditable="false">Bartrs</span>
                    <span className="ml-auto">{barterAmount} Bartrs</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
              {/* <!-- Friends card --> */}
              <div className="p-3 bg-white hover:shadow rounded-3xl">
                <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-slate-900">
                  <span className="text-green-500">
                    <svg
                      className="h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </span>
                  <span>Similar Profiles</span>
                </div>
                <div class="grid grid-cols-3">{userCard}</div>
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
                  <span className="tracking-wide ">About</span>
                </div>
                <div className="text-slate-700">
                  <div className="grid text-medium md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">
                        {userProfile?.user?.first_name}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">
                        {userProfile?.user?.last_name}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">City</div>
                      <div className="px-4 py-2">{userProfile?.user?.city}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">State</div>
                      <div className="px-4 py-2">
                        {userProfile?.user?.state}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          {userProfile?.user?.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-6 mb-6">
                  <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:scale-125">
                    Message
                  </button>
                  <button
                    onClick={() => setIsClicked(!isClicked)}
                    className="inline-block px-6 py-3 ml-6 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:scale-125"
                  >
                    Propose Bartr
                  </button>
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- User Skill Info --> */}
              <div className="p-3 bg-white rounded-3xl hover:shadow-xl">
                <div className="flex items-center space-x-2 font-bold leading-8 text-indigo-700">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
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
                  <span className="tracking-wide">Skill Information</span>
                </div>
                <div className="text-slate-700">
                  <div className="grid text-medium md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Years of Experience
                      </div>
                      <div className="px-4 py-2">
                        {userProfile?.years_exp === 1
                          ? userProfile?.years_exp + " year"
                          : userProfile?.years_exp + " years"}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Professional Link
                      </div>
                      <div className="px-4 py-2">{userProfile?.proof_url}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Skill Bio</div>
                      <div className="px-4 py-2">{userProfile?.proof_des}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- End --> */}

              {/* <!-- Other Skills --> */}
              <div className="p-3 bg-white rounded-3xl hover:shadow-xl mt-5">
                <div className="flex items-center space-x-2 font-bold leading-8 text-indigo-700">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
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
                  <span className="tracking-wide">Other Skills</span>
                </div>
                <div className="text-slate-700">{/* {userOtherSkills} */}</div>
              </div>

              {/* Reviews Start */}
              <Reviews userProfile={userProfile}/>
              {/* Reviews End */}
              {/* <!-- End of profile tab --> */}
            </div>
            <div className="mt-15 ml-56 absolute z-40 w-3/5  bg-indigo-100 h-3/6 rounded-xl shadow-dashboard transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-border from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:-translate-y-4 ">
              <div
                onClick={() => setIsClicked(!isClicked)}
                className="flex justify-end mt-2 mr-5"
              >
                <img className="h-16 hover:animate-spin " src="./x.png" />
              </div>
              <div className="text-center mt-2">
                <h4 className="font-bold mb-5 flex justify-center text-3xl text-white drop-shawdow-xl">
                  Barter Proposition for {userProfile?.user?.first_name}
                </h4>
                <h5 className="mb-6 text-xl font-bold leading-normal text-white font-heading"></h5>
              </div>
              <div className="flex justify-center">
                <div className="mb-4">
                  <label className="block mb-2 font-semibold leading-normal text-white">
                    {userProfile?.user?.first_name}'s Skill
                  </label>
                  <select className="px-4 py-3.5 w-96 text-slate-400 font-medium placeholder-slate-400 bg-white outline-none border border-slate-300 rounded-lg focus:ring focus:ring-indigo-300">
                    <option>{userProfile?.skill?.name}</option>
                  </select>
                </div>
                <div className="mb-4 ml-5">
                  <label className="block mb-2 font-semibold leading-normal text-white">
                    Hours
                  </label>
                  <input
                    value={recipientHours}
                    onChange={(e) => setRecipientHours(e.target.valueAsNumber)}
                    className="px-4 py-3.5 text-slate-400 font-medium placeholder-slate-400 bg-white outline-none border border-slate-300 rounded-lg focus:ring focus:ring-indigo-300"
                    type="number"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-4">
                  <label className="block mb-2 font-semibold leading-normal text-white">
                    {user?.first_name}'s Skill
                  </label>
                  <select
                    value={userSkill}
                    onChange={(e) => {
                      setUserSkill(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="px-4 py-3.5 w-96 text-slate-400 font-medium placeholder-slate-400 bg-white outline-none border border-slate-300 rounded-lg focus:ring focus:ring-indigo-300"
                  >
                    {userSkills}
                  </select>
                </div>
                <div className="mb-4 ml-5">
                  <label className="block mb-2 font-semibold leading-normal text-white">
                    Hours
                  </label>
                  <input
                    value={proposerHours}
                    onChange={(e) => setProposerHours(e.target.valueAsNumber)}
                    className="px-4 py-3.5 w-full text-slate-400 font-medium placeholder-slate-400 bg-white outline-none border border-slate-300 rounded-lg focus:ring focus:ring-indigo-300"
                    type="number"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-5">
                {barterClicked ? (
                  <button
                    onClick={() => {
                      handleSubmit();
                      setBarterClicked(!barterClicked);
                    }}
                    className="inline-block px-6 py-3 ml-auto mr-auto text-white rounded shadow bg-amber-500 hover:bg-indigo-600"
                  >
                    Propose Bartr
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleSubmit();
                      setBarterClicked(!barterClicked);
                    }}
                    className="inline-block px-6 py-3 ml-auto mr-auto text-white rounded shadow bg-amber-500 hover:bg-indigo-600"
                  >
                    Proposal Sent!
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default UserProfiles;
