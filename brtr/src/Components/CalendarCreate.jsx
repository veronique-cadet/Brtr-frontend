import React from 'react'
import { Link } from "react-router-dom"
import NavBarTwo from './NavBarTwo'
import Footer from './Footer'

function CalendarCreate({setUser, user}) {
  return (
    <div><NavBarTwo setUser={setUser} />
    <section className="pt-24 pb-36 bg-white overflow-auto h-screen">
    <div className="container px-4 mx-auto">
      <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">{user?.first_name} {user?.last_name}</p>
      <h2 className="mb- text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Your Calendar</h2>
  
      {/* //nav for barters// */}
      <section className="py-4 overflow-hidden">
 <div className="container px-4 mx-auto">
   <div className="relative flex justify-center">
     <div className="relative z-10 inline-flex flex-wrap items-center -m-5">
   <Link to="/calendar">
     <button className=" ml-7 pt-5  pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500">Calendar</button></Link>
     <Link to="/calendaragreedbarters">
     <button className=" ml-7 pt-5  pb-10 group relative flex-col items-center text-lg  text-indigo-600 hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500">Agreed Bartrs</button></Link>
   <Link to="/calendarscheduledbarters">
     <button className=" pt-5 ml-7 pb-10 group relative flex-col items-center text-lg   text-indigo-600 hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500">Scheduled Bartrs</button></Link>
   <Link to="/calendarscheduling">
     <button className=" ml-7 pt-5 pb-10 group relative flex-col items-center text-lg text-amber-500 hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " >Schedule a Bartr</button></Link>
 </div>
     <div className="absolute mt-10 bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
   </div>
 </div>
</section>
    </div>

  <section className=" mt-5  py-4"><div className="container px-4 mx-auto">
  <div className="p-6 h-full border bg-slate-100 overflow-auto rounded-lg shadow-dashboard">
    <div className="pb-6 border-b border-slate-100">
      <div className="flex flex-wrap items-center justify-between -m-2">
        <div className="w-full md:w-auto p-2">
          <h2 className="text-slate-900 text-lg font-semibold" >Schedule Bartr!</h2>
          <p className="text-xs text-indigo-700 font-medium">Look at you teaching skills and shit!</p>
        </div>
        <div className="w-full md:w-auto p-2">
          <div className="flex flex-wrap justify-between -m-1.5">
            <div className="w-full md:w-auto p-1.5">
            
              <button 
               className="flex flex-wrap justify-center w-full px-4 py-2 font-bold text-sm text-slate-500 hover:bg-indigo-500 hover:text-white  bg-white rounded-md shadow-button">
                <p>Cancel</p>
              </button>
          
            </div>
            <div className="w-full md:w-auto p-1.5">
              
              <button 
             
              className="flex flex-wrap justify-center w-full px-4 py-2 bg-amber-500 hover:bg-indigo-500 font-medium text-sm text-white border rounded-md shadow-button"><p>Schedule Brtr!</p> </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-6 border-b border-slate-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold">Skill</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <div className="relative">
              <select 
              
              className=" w-full py-2.5 px-4 text-slate-900 text-base font-normal bg-white border outline-none border-slate-200 focus:border-amber-500 rounded-lg shadow-input"></select></div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-6 border-b border-slate-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold">User</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <div className="relative">
              <select 
              
              className=" w-full py-2.5 px-4 text-slate-900 text-base font-normal bg-white border outline-none border-slate-200 focus:border-amber-500 rounded-lg shadow-input"></select></div>
          </div>
        </div>
      </div>
    </div>
   

    <div className="py-6 border-b border-slate-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold" >Date</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <input 
            
            className="w-full px-4 py-2.5 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input" type="date"/></div>
        </div>
      </div>
    </div>

    <div className="py-6 border-b border-slate-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold" >Time</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <input 
            
            className="w-full px-4 py-2.5 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input" type="time"/></div>
        </div>
      </div>
    </div>

    <div className="py-6 border-b border-slate-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold">Hours</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <input
            
            className="w-full px-4 py-2.5 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input" type="number" /></div>
        </div>
      </div>
    </div>


  </div>
  </div>
</section>
</section>
  <Footer/></div>
  )
}

export default CalendarCreate