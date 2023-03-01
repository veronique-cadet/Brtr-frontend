import React, { useState, useEffect } from 'react'
import NavBarTwo from './NavBarTwo'
import { useLocation } from "react-router-dom";
import Footer from './Footer';
import Reviews from './Reviews';

function UserProfiles({user, setUser, yourBarters, setYourBarters}) {

const [userProfile, setUserProfile] = useState({})
const [isClicked, setIsClicked] = useState(true)
const [skills, setSkills] = useState([])
const [userSkill, setUserSkill] = useState("")
const [proposerHours, setProposerHours] = useState("")
const [recipientHours, setRecipientHours] = useState("")
const [barterClicked, setBarterClicked] = useState(true)

  const skill = useLocation();
  const { from } = skill.state?.from;
  const id = skill.state?.from.id;
  console.log(id)

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
          console.log(newProposedBarter)
        });
    };
  
    const newProposedBarter = {
      proposer_id: user?.id,
      recipient_id: userProfile?.user?.id,
      recipient_skill_id: userProfile?.id,
      proposer_skill_id: parseInt(userSkill),
      agreed: false,
      proposer_hours: proposerHours,
      recipient_hours: recipientHours
    };


 
const userSkills = user?.user_skills.map((u_skill)=>{return <option value={u_skill.id}>{u_skill.name}</option>})
console.log(userSkills)

// console.log(userProfile?.user.user_skills)

// const proposedUserSkills = userProfile?.user?.user_skills.map((u_skill)=>{return <option>{u_skill?.name}</option>})
// console.log(proposedUserSkills)


  

   {/* <h1>{userProfile?.user?.first_name}</h1>
  <h1>{userProfile?.user?.bio}</h1>
  <h1>{userProfile?.user?.city}</h1>
  <h1>{userProfile?.user?.state}</h1>
  <h1>{userProfile?.user?.rating}</h1>

  <button classNameName="flex-wrap justify-center w-20 px-4 py-2 text-sm font-medium bg-indigo-200 border rounded-md first-letter:lex text-black-500 hover:text-black-600 border-black-200 hover:border-black-300 shadow-button"><p>Make a Barter</p>
  </button> */}

  return (
    <div className="bg-slate-100">
 <NavBarTwo setUser={setUser} />
{isClicked ? 
<div className="container p-5 mx-auto my-10 overflow-auto h-screen">
  <div className="md:flex no-wrap md:-mx-2 ">
    {/* <!-- Left Side --> */}
    <div className="w-full md:w-3/12 md:mx-2">
      {/* <!-- Profile Card --> */}
      <div className="p-3 bg-white border-t-4 border-indigo-400  rounded-3xl  hover:shadow-xl">
        <div className="overflow-hidden image">
          <img className="w-full h-auto mx-auto" src="https://cdn.britannica.com/10/172210-050-24612D72/Cyndi-Lauper-Tony-Award.jpg?w=400&amp;h=300&amp;c=crop" alt=""/></div>
        <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">{userProfile?.user?.first_name}</h1>
        <h3 className="leading-6 text-gray-600 font-lg text-semibold">{userProfile?.skill?.name}</h3>
        <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">{userProfile?.user?.bio}</p>
        <ul className="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow"><li className="flex items-center py-3">
          <span contenteditable="false">Rating</span>
          <span className="ml-auto"><span className="px-2 py-1 text-sm text-white bg-indigo-500 rounded">{userProfile?.user?.rating}/5</span></span>
          </li>
          <li className="flex items-center py-3">
            <span contenteditable="false">Bartrs</span>
            <span className="ml-auto">10 Bartrs</span>
          </li>
        </ul></div>
      {/* <!-- End of profile card --> */}
      <div className="my-4"></div>
      {/* <!-- Friends card --> */}
      <div className="p-3 bg-white rounded-3xl hover:shadow">
        <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
          <span className="text-green-500">
            <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></span>
          <span>Similar Profiles</span>
        </div>
        <div className="grid grid-cols-3">
          <div className="my-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full" src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg" alt=""/><a href="#" className="text-main-color">Kojstantin</a>
          </div>
          <div className="my-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full" src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt=""/><a href="#" className="text-main-color">James</a>
          </div>
          <div className="my-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt=""/><a href="#" className="text-main-color">Natie</a>
          </div>
          <div className="my-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full" src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png" alt=""/><a href="#" className="text-main-color">Casey</a>
          </div>
        </div>
      </div>
      {/* <!-- End of friends card --> */}
    </div>
    {/* <!-- Right Side --> */}
    <div className="w-full h-64 mx-2 md:w-9/12">
      {/* <!-- Profile tab -->
      <!-- About Section --> */}
      <div className="p-3 bg-white rounded-3xl hover:shadow-xl">
        <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
          <span clas="text-green-500">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid text-sm md:grid-cols-2">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{userProfile?.user?.first_name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{userProfile?.user?.last_name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">City</div>
              <div className="px-4 py-2">{userProfile?.user?.city}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">State</div>
              <div className="px-4 py-2">{userProfile?.user?.state}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">{userProfile?.user?.email}</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Social Media</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">{userProfile?.user?.email}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 mb-6">
        <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-2">Message</button>
        <button onClick={()=>setIsClicked(!isClicked)} className="inline-block px-6 py-3 ml-6 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-2">Propose Bartr</button>
        </div>
      </div>
      {/* <!-- End of about section --> */}

      <div className="my-4"></div>

      {/* <!-- Experience and education --> */}
      <div className="p-3 bg-white rounded-3xl shadow-xl hover:shadow-xl">

        <div className="grid grid-cols-2">
          <div>
            <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900">
              <span clas="text-green-500">
                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></span>
              <span className="tracking-wide">Experience</span>
            </div>
            <ul className="space-y-2 list-inside"><li>
              <div className="text-indigo-500">Years of Experience</div>
              <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-indigo-500">Proof of Experience</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-indigo-500">Images or Video</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
             
            </ul></div>
          <div>
            <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900">
              <span clas="text-green-500">
                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"></path><path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg></span>
              <span className="tracking-wide">Education</span>
            </div>
            <ul className="space-y-2 list-inside"><li>
              <div className="text-indigo-500">Education</div>
              <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              {/* <li>
                <div className="text-indigo-500">Bachelors Degreen in LPU</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li> */}
            </ul></div>
        </div>
        {/* <!-- End of Experience and education grid --> */}
      </div>
      {/* Reviews Start */}
   <Reviews />
       {/* Reviews End */}
      {/* <!-- End of profile tab --> */}
    </div>
  </div>
</div> : 
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
      <div className="p-3 bg-white border-t-4 border-indigo-400">
        <div className="overflow-hidden image">
          <img className="w-full h-auto mx-auto" src="https://cdn.britannica.com/10/172210-050-24612D72/Cyndi-Lauper-Tony-Award.jpg?w=400&amp;h=300&amp;c=crop" alt=""/></div>
        <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">{userProfile?.user?.first_name}</h1>
        <h3 className="leading-6 text-gray-600 font-lg text-semibold">{userProfile?.skill?.name}</h3>
        <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">{userProfile?.user?.bio}</p>
        <ul className="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-xl hover:text-gray-700 hover:shadow-xl"><li className="flex items-center py-3">
          <span contenteditable="false">Rating</span>
          <span className="ml-auto"><span className="px-2 py-1 text-sm text-white bg-indigo-500 rounded">{userProfile?.user?.rating}/5</span></span>
          </li>
          <li className="flex items-center py-3">
            <span contenteditable="false">Bartrs</span>
            <span className="ml-auto">10 Bartrs</span>
          </li>
        </ul></div>
      {/* <!-- End of profile card --> */}
      <div className="my-4"></div>
      {/* <!-- Friends card --> */}
      <div className="p-3 bg-white hover:shadow">
        <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
          <span className="text-green-500">
            <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></span>
          <span>Similar Profiles</span>
        </div>
        <div className="grid grid-cols-3">
          <div className="my-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full" src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg" alt=""/><a href="#" className="text-main-color">Kojstantin</a>
          </div>
          <div className="my-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full" src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt=""/><a href="#" className="text-main-color">James</a>
          </div>
          <div className="my-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt=""/><a href="#" className="text-main-color">Natie</a>
          </div>
          <div className="my-2 text-center">
            <img className="w-16 h-16 mx-auto rounded-full" src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png" alt=""/><a href="#" className="text-main-color">Casey</a>
          </div>
        </div>
      </div>
      {/* <!-- End of friends card --> */}
    </div>
    {/* <!-- Right Side --> */}
    <div className="w-full h-64 mx-2 md:w-9/12 hover:shadow">
      {/* <!-- Profile tab -->
      <!-- About Section --> */}
      <div className="p-3 bg-white rounded-sm shadow-sm hover:shadow">
        <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
          <span clas="text-green-500">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid text-sm md:grid-cols-2">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{userProfile?.user?.first_name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{userProfile?.user?.last_name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">City</div>
              <div className="px-4 py-2">{userProfile?.user?.city}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">State</div>
              <div className="px-4 py-2">{userProfile?.user?.state}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">{userProfile?.user?.email}</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Social Media</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">{userProfile?.user?.email}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 mb-6">
        <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-4">Message</button>
        <button onClick={()=>setIsClicked(!isClicked)} className="inline-block px-6 py-3 ml-6 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-4">Propose Bartr</button>
        </div>
      </div>
      {/* <!-- End of about section --> */}

      <div className="my-4"></div>

      {/* <!-- Experience and education --> */}
      <div className="p-3 bg-white rounded-sm shadow-sm">

        <div className="grid grid-cols-2">
          <div>
            <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900">
              <span clas="text-green-500">
                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></span>
              <span className="tracking-wide">Experience</span>
            </div>
            <ul className="space-y-2 list-inside"><li>
              <div className="text-indigo-500">Years of Experience</div>
              <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-indigo-500">Proof of Experience</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-indigo-500">Images or Video</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
             
            </ul></div>
          <div>
            <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900">
              <span clas="text-green-500">
                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"></path><path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg></span>
              <span className="tracking-wide">Education</span>
            </div>
            <ul className="space-y-2 list-inside"><li>
              <div className="text-indigo-500">Education</div>
              <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li>
              {/* <li>
                <div className="text-indigo-500">Bachelors Degreen in LPU</div>
                <div className="text-xs text-gray-500">March 2020 - Now</div>
              </li> */}
            </ul></div>
        </div>
        {/* <!-- End of Experience and education grid --> */}
      </div>
      {/* Reviews Start */}
   <Reviews />
       {/* Reviews End */}
      {/* <!-- End of profile tab --> */}
    </div>
  <div className= "ml-56 absolute z-40 w-3/5  bg-black h-3/5 rounded-xl bg-opacity-90">
      <div onClick={()=> setIsClicked(!isClicked)} className="flex justify-end mt-2 mr-5"><img className="h-16 hover:bg-indigo-100 hover:-translate-x-2 center"src="./x.png"/></div>
      <div className="text-center">
      <h4 className="mb-6 text-3xl font-bold leading-snug text-white font-heading">Barter Proposition for {userProfile?.user?.first_name}</h4>
      <h5 className="mb-6 text-xl font-bold leading-normal text-white font-heading"></h5>
      </div>
     <div className= "flex justify-center">
      <div className="mb-4">
  <label className="block mb-2 font-semibold leading-normal text-white">{userProfile?.user?.first_name}'s Skill</label>
<select className="px-4 py-3.5 w-96 text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300">
  <option value="volvo">{userProfile?.skill?.name}</option>
</select>
</div>
<div className="mb-4 ml-5">
  <label className="block mb-2 font-semibold leading-normal text-white">Hours</label>
  <input 
  value={recipientHours} onChange={(e) => setRecipientHours(e.target.valueAsNumber)} 
  className="px-4 py-3.5 text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" type="number"/>
</div>
</div>
<div className= "flex justify-center">
<div className="mb-4">
<label className="block mb-2 font-semibold leading-normal text-white">{user?.first_name}'s Skill</label>
<select 
value={userSkill} onChange={(e)=>{
  setUserSkill(e.target.value)
console.log(e.target.value)
}}
className="px-4 py-3.5 w-96 text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300">
  {userSkills}
</select>
</div>
<div className="mb-4 ml-5">
  <label className="block mb-2 font-semibold leading-normal text-white">Hours</label>
  <input 
  value={proposerHours} onChange={(e) => setProposerHours(e.target.valueAsNumber)}
  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" type="number"/>
</div>
</div>
<div className="flex justify-center mt-5">
{ barterClicked ? <button onClick={()=>{
   handleSubmit()
   setBarterClicked(!barterClicked)}} className="inline-block px-6 py-3 ml-auto mr-auto text-white rounded shadow bg-amber-500 hover:bg-indigo-600">Propose Bartr</button>
  :<button onClick={()=>{
   handleSubmit()
  setBarterClicked(!barterClicked)}} className="inline-block px-6 py-3 ml-auto mr-auto text-white rounded shadow bg-amber-500 hover:bg-indigo-600">Proposal Sent!</button>}
</div>
    </div>
  </div>
</div> }
<Footer />
  </div>
  )
}

export default UserProfiles