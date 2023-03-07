import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import NavBarTwo from './NavBarTwo'
import Footer from './Footer'
import DatePicker from "react-datepicker"

function CalendarCreate({setUser, user, yourBarters, setYourBarters,}) {

  const [calendars, setCalendars] = useState([])
  const [isClicked, setIsClick] = useState(true)

  useEffect(() => {
		fetch("/calendars")
		  .then((response) => response.json())
		  .then((data) => {
			setCalendars(data);
			console.log(data);
		  });
	  }, []);

  const userSkills = user?.user_skills.map((u_skill)=>{return <option key={u_skill.id} value={u_skill.id}>{u_skill.name}</option>})
console.log(userSkills)

useEffect(() => {
  fetch("/barters")
    .then((response) => response.json())
    .then((data) => {
      setYourBarters(data);
      console.log(data);
    });
}, []);

const filteredBarters = yourBarters.filter((barter) => {
  if ((barter.agreed === true) && 
      ((barter.proposer_id === user?.id) || (barter.recipient_id === user?.id))) {
    return true;
  }
  return false;
});
  


const barterId = filteredBarters.map((b) => {
  let otherUser;
  if (b.recipient_id === user.id) {
    otherUser = b.proposer.first_name;
  } else if (b.proposer_id === user.id) {
    otherUser = b.recipient.first_name;
  }
  if (otherUser) {
    return (
      <option key={b.id} value={b.id}>
       You and {otherUser} - {b.proposer_skill.name} and {b.recipient_skill.name}
      </option>
    );
  }
});

console.log(filteredBarters)

const recipient = filteredBarters.map((u) => {
  let otherUser;
  let value;
  if (u.recipient_id === user.id) {
    otherUser = u.proposer.first_name;
    value = u.proposer_id;
  } else if (u.proposer_id === user.id) {
    otherUser = u.recipient.first_name;
    value = u.recipient_id;
  }
  if (otherUser) {
    return (
      <option key={u.id} value={value}>
        {otherUser}
      </option>
    );
  }
});


const [calSkill, setCalSkill] = useState("")
const [recId, setRecId] = useState("")
const [time, setTime] = useState("")
const [hours, setHours] = useState("")
const [bId, setBId] = useState("")
const [date, setDate] = useState("");

console.log(recId)
console.log(bId)
console.log(calSkill)

const newCalendar = {
 user_skill_id: parseInt(calSkill),
 scheduling_user_id: user?.id,
 recipient_user_id: parseInt(recId),
 complete: false,
 hours: hours,
 barter_id: parseInt(bId)
}

const handleSubmit = () => {
  fetch("/calendars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCalendar),
  })
    .then((response) => response.json())
    .then(() => {
      setCalendars([...calendars, newCalendar]);
      console.log(newCalendar)
    });
};





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
     <button className=" pt-5 ml-7 pb-10 group relative flex-col items-center text-lg   text-indigo-600 hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500">Scheduled Lessons</button></Link>
       <Link to="/complete">
        <button className=" ml-7 pt-5 pb-10 group relative flex-col items-center text-lg  text-indigo-600 hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " >Completed Lessons</button></Link>
   <Link to="/calendarscheduling">
     <button className=" ml-7 pt-5 pb-10 group relative flex-col items-center text-lg text-amber-500 hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " >Schedule a Lesson</button></Link>
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
            {isClicked ?
              <button 
              onClick={()=>{
              setIsClick(!isClicked)
              handleSubmit()}}
              className="flex flex-wrap justify-center w-full px-4 py-2 bg-amber-500 hover:bg-indigo-500 font-medium text-sm text-white border rounded-md shadow-button"><p>Schedule Brtr!</p> </button> :  <button 
               className="flex flex-wrap justify-center w-full px-4 py-2 bg-amber-500 hover:bg-indigo-500 font-medium text-sm text-white border rounded-md shadow-button"><p>Scheduled!</p> </button> }
              
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
              onChange={(e)=> setCalSkill(e.target.value)}
              className=" w-full py-2.5 px-4 text-slate-900 text-base font-normal bg-white border outline-none border-slate-200 focus:border-amber-500 rounded-lg shadow-input">{userSkills}</select></div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-6 border-b border-slate-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold">Bartr</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <div className="relative">
              <select 
              onChange={(e)=> setBId(e.target.value)}
              className=" w-full py-2.5 px-4 text-slate-900 text-base font-normal bg-white border outline-none border-slate-200 focus:border-amber-500 rounded-lg shadow-input">{barterId}</select></div>
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
              onChange={(e)=> setRecId(e.target.value)}
              className=" w-full py-2.5 px-4 text-slate-900 text-base font-normal bg-white border outline-none border-slate-200 focus:border-amber-500 rounded-lg shadow-input">{recipient}</select></div>
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
            value={date} onChange={(e)=> setDate(e.target.valueAsNumber)}
            className="w-full px-4 py-2.5 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input" type="date"/>
          </div>
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
            value={time} onChange={(e)=> setTime(e.target.valueAsNumber)}
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
             value={hours} onChange={(e)=> setHours(e.target.valueAsNumber)}
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