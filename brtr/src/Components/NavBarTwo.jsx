import React from 'react'
import { Link, useNavigate } from "react-router-dom";


function NavBarTwo({user, setUser}) {
  const navigate = useNavigate()

  function handleDelete(e){
    e.preventDefault()
    setUser(null)
    fetch(`/logout`,{ method: 'DELETE' })
    .then(req => req.json())
    .then()
    .catch(error => console.error("Error:", error));
    navigate("/")
}

// console.log(setUser)
  return (
  <div className="container mx-auto overflow-hidden">
    <div className="flex items-center justify-between px-4 py-5">
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="flex w-auto mr-14">
          <a href="" className="flex">
              <img src="./logo.png" alt="" className="h-14"/><p className="mt-1 text-4xl font-bold ">artr</p></a>
          </div>
        </div>
      </div>
      <div className="w-auto">
      <div className="flex flex-wrap items-center">
        <div className="hidden w-auto lg:block">
          <ul className="flex items-center mr-16">
<Link to="/Browse"><li className="text-xl font-normal text-black mr-9 hover:text-amber-700"> Browse
            </li></Link>
            <Link to="/receivedbarters">
            <li className="text-xl font-normal text-black mr-9 hover:text-amber-700"> Bartrs
            </li></Link>
            <Link to="/Messages">
            <li className="text-xl font-normal text-black mr-9 hover:text-amber-700"> Messages
            </li></Link>
            <Link to="/yourprofile">
            <li className="text-xl font-normal text-black mr-9 hover:text-amber-700"> Profile
            </li> </Link>
          </ul>
</div>
        <div className="hidden w-auto lg:block">
        
          <div className="inline-block">
            <button 
            className="w-full px-5 py-3 font-semibold text-white transition duration-200 ease-in-out bg-indigo-500 border-indigo-500 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-amber-700" 
            type="button"
            onClick={handleDelete}
            >Log Out </button>
          </div>
        </div>
        <div className="w-auto lg:hidden">
            <a href="#">
              <svg className="text-indigo-600 navbar-burger" width="51" height="51" viewbox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="28" fill="currentColor"></rect><path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBarTwo