import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function BarterCardAgreed({barter, user}) {


    console.log(barter.recipient_skill)
  return (
  <div>
    <div className= "mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100 hover:shadow-xl">
     
     <div className ="flex justify-center mb-5">
     <p className="text-2xl font-bold">You and&nbsp;</p>

     <p className="text-2xl font-bold">{barter?.recipient_id === user?.id ? barter?.proposer?.first_name : barter?.recipient?.first_name} Agreed to A Bartr</p> 
     </div>
     <div className="flex justify-center mb-2">
     <p className="text-2xl mb-2 ">{barter?.recipient_id === user?.id ? barter?.proposer?.first_name : barter?.recipient?.first_name} will give you &nbsp;</p> 
     <p className="text-2xl font-extrabold text-indigo-700"> {barter?.recipient_id === user?.id ? barter?.proposer_hours : barter?.recipient_hours} hours&nbsp;</p> 
     <p className="text-2xl mb-2 ">of {barter?.recipient_id === user?.id ? barter?.proposer_skill?.name : barter?.recipient_skill?.name} lessons</p> 
     </div> 
     <p className ="font-extrabold mb-5 flex justify-center text-xl text-transparent transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:-translate-y-4">In Exchange For</p> 
     <div className="flex justify-center mb-2">
     <p className="text-2xl font-extrabold text-indigo-700">{user?.id === barter?.proposer_id ? barter?.proposer_hours : user?.id === barter?.recipient_id ? barter?.recipient_hours : null} hours&nbsp;</p> 
     <p className="text-2xl mb-5">of {user?.id === barter?.proposer_id ? barter?.proposer_skill?.name : user?.id === barter?.recipient_id ? barter?.recipient_skill?.name : null} lessons</p> 
     </div> 
     < div className ="flex justify-center">
     <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Message {barter?.recipient_id === user?.id ? barter?.proposer?.first_name : barter?.recipient?.first_name}</button>
     <Link to="/calendarscheduling">
     <button className=" ml-7 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Schedule Your Bartr!</button></Link>
     </div>
    </div>
  </div>
  )
}

export default BarterCardAgreed