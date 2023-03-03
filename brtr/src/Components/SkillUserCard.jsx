import React, {useState} from 'react'
import { Link } from "react-router-dom";



function SkillUserCard({skill}) {

  const[searchedUser, setSearchedUser] = useState({})
  
  return (
    <div className="w-full p-3 md:w-1/2 xl:w-1/4">
    <div className="bg-slate-100 border rounded-md border-black-100 shadow-dashboard hover:bg-white hover:shadow-2xl shadow-xl transition duration-200">
      <div className="flex flex-col items-center justify-center px-4 pt-8 pb-6 border-b border-black-100">
        <img className="w-48 h-48 max-w-full align-middle border-none rounded-full shadow" src={skill?.user?.picture} alt=""/>
        <h2 className="mt-2 text-lg font-medium text-black-900">{skill.user.first_name}</h2>
        <h3 className="mb-3 text-medium font-medium text-black-400">{skill.skill.name}</h3>
        <div className="flex"> <p className="px-2 py-px mb-6 text-sm font-medium text-indigo-500 bg-indigo-300  rounded-xl shadow-lg">Rating: {skill.user.rating}/5  </p>
        <p className="px-2 py-px mb-6 text-sm font-medium text-indigo-500 shadow-sm"> 5 Barters </p>
        </div>
       
        <div className="flex flex-wrap justify-between w-full -m-2">
          <div className="w-full p-2 md:w-1/2">
            <button className="flex-wrap justify-center w-full px-4 py-2 text-sm font-medium bg-indigo-300 border rounded-md first-letter:lex text-black-500 hover:text-black-600 border-black-200 hover:border-black-300 shadow-button hover:bg-amber-500">
              <p>Message</p>
            </button>
          </div>
          <div className="w-full p-2 md:w-1/2">
          <Link to="/userprofile" state={{ from: skill }}>
            <button 
            className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium border rounded-md text-black-500 hover:text-black-600 border-black-200 hover:border-black-300 shadow-button bg-slate-300 hover:bg-amber-500"
            onClick={() => {
              setSearchedUser(skill.user)
              console.log(skill.user)
            }}
            >
              <p>Profile</p>
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SkillUserCard