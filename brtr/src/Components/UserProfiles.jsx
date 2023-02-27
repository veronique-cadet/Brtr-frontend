import React, { useState, useEffect } from 'react'
import NavBarTwo from './NavBarTwo'
import { useLocation } from "react-router-dom";

function UserProfiles({user, setUser}) {

const [userProfile, setUserProfile] = useState({})

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

  console.log(userProfile)

  return (
    <div>
 <NavBarTwo setUser={setUser} />
  <h1>{userProfile?.user?.first_name}</h1>
  <h1>{userProfile?.user?.bio}</h1>
  <h1>{userProfile?.user?.city}</h1>
  <h1>{userProfile?.user?.state}</h1>
  <h1>{userProfile?.user?.rating}</h1>

  <button className="flex-wrap justify-center w-full px-4 py-2 text-sm font-medium bg-indigo-200 border rounded-md first-letter:lex text-black-500 hover:text-black-600 border-black-200 hover:border-black-300 shadow-button"><p>Make a Barter</p>
  </button>

  </div>
  )
}

export default UserProfiles