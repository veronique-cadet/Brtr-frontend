import React from 'react'
import { Link } from "react-router-dom";

function BarterCardProposed({barter}) {

    console.log(barter.recipient_skill)
  return (
  <div>
    <div className= "mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100">
     
     <div className ="flex justify-center mb-5">
     <p className="text-2xl">You are requesting&nbsp;</p>
     <p className="text-2xl font-extrabold text-indigo-700 "> {barter?.recipient_hours} hours&nbsp;</p> 
     <p className="text-2xl ">of {barter?.recipient_skill?.name} lessons from {barter?.recipient?.first_name}</p> 
     </div>
     <p className ="font-extrabold mb-5 flex justify-center text-xl text-transparent transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:-translate-y-4">In Exchange For</p> 
     <div className="flex justify-center mb-2">
     <p className="text-2xl font-extrabold text-indigo-700">{barter?.proposer_hours} hours&nbsp;</p> 
     <p className="text-2xl mb-5 tex">of {barter?.proposer_skill?.name} lessons</p> 
     </div>
     <p className="text-xl flex justify-center mb-8 text-gray-300">Your Bartr was sent and must be reviewed by {barter?.recipient?.first_name}</p> 
 
     < div className ="flex justify-center">
     <Link to="/userprofiles" state={{ from: barter }}>
     <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">View {barter?.recipient?.first_name} Profile</button></Link>
     <button className=" ml-7 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Make Another Bartr</button>
     </div>
    </div>
  </div>
  )
}

export default BarterCardProposed