import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import NavBarTwo from './NavBarTwo'
import Footer from './Footer'
import CalendarCardScheduled from './CalendarCardScheduled'

function CalendarScheduled({setUser, user}) {

  const [calendars, setCalendars] = useState([])

  useEffect(() => {
		fetch("/calendars")
		  .then((response) => response.json())
		  .then((data) => {
			setCalendars(data);
			console.log(data);
		  });
	  }, []);


	  const filteredCalendar = calendars.filter((calendar) => {
		if ((user?.id === calendar?.scheduling_user_id) || (user?.id === calendar?.recipient_user_id)) {
		  return true;
		}
		return false;
	  });

  console.log(filteredCalendar)
    const scheduledCard = filteredCalendar.map((calendar) => {
      return <CalendarCardScheduled key= {calendar.id} id={calendar.id} calendar={calendar} user={user}/> })



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
     <button className=" pt-5 ml-7 pb-10 group relative flex-col items-center text-lg  text-amber-500  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500">Scheduled Bartrs</button></Link>
   <Link to="/calendarscheduling">
     <button className=" ml-7 pt-5 pb-10 group relative flex-col items-center text-lg  text-indigo-600 hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " >Schedule a Bartr</button></Link>
 </div>
     <div className="absolute mt-10 bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
   </div>
 </div>
</section>
  
  {/* barters listed */}
      <div className="flex flex-wrap -m-1.5 mb-10">
        <div className="w-full p-1.5">
   {scheduledCard}
        </div>
      </div>
    </div>
  </section><Footer/></div>
  )
}

export default CalendarScheduled