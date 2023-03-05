import React from 'react'
import { Link } from "react-router-dom";


function OtherSkilledUsers({skilledOtherUser, setUserProfile}) {

    // onClick={()=>setUserProfile(skilledOtherUser)} 

  return ( 
  <div onClick={()=>setUserProfile(skilledOtherUser)} 
  class="text-center my-2">
  <img class="h-16 w-16 rounded-full mx-auto"
      src={skilledOtherUser?.user?.picture}
      alt="user picture"/>
  <h1 className="font-bold text-indigo-700">{skilledOtherUser?.user?.first_name}</h1>
</div>
)
  
}

export default OtherSkilledUsers