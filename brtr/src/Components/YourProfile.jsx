import React from 'react'
import NavBarTwo from './NavBarTwo'
import Reviews from './Reviews'
import Footer from './Footer'
import { Link } from "react-router-dom"

function YourProfile({user, setUser}) {
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
             <img className="w-full h-96 mx-auto rounded-xl" src={user?.picture}/></div>
           <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">{user?.first_name}</h1>
           <h3 className="leading-6 text-gray-600 font-lg text-semibold">{}</h3>
           <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">{user?.bio}</p>
           <ul className="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow"><li className="flex items-center py-3">
             <span contenteditable="false">Rating</span>
             <span className="ml-auto"><span className="px-2 py-1 text-sm text-white bg-indigo-500 rounded">{user?.rating}/5</span></span>
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
             <span>Your Skills</span>
           </div>
           <div className="grid grid-cols-3">
            
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
                   <a className="text-blue-800" href="mailto:jane@example.com">{user?.email}</a>
                 </div>
               </div>
               <div className="grid grid-cols-2">
                 <div className="px-4 py-2 font-semibold">Social Media</div>
                 <div className="px-4 py-2">
                   <a className="text-blue-800" href="mailto:jane@example.com">{user?.email}</a>
                 </div>
               </div>
             </div>
           </div>
           <div className="flex justify-center mt-6 mb-6">
           <Link to="/editprofile">
           <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-2">Add Skill</button>
           </Link>
           <button className="ml-6 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-2">Edit Profile</button>
           </div>
         </div>
         {/* <!-- End of about section --> */}
   
        
         {/* Reviews Start */}
      <Reviews />
          {/* Reviews End */}
         {/* <!-- End of profile tab --> */}
       </div>
     </div>
   </div> 
   <Footer />
    </div>
  )
}

export default YourProfile