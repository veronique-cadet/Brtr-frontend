import React, {useState} from 'react'
import dayjs from "dayjs";

function CalendarCardScheduled({calendar, user, id, calendars, setCalendars}) {

console.log(calendar?.user_skill?.name)


const dateFormat = dayjs(calendar?.date).format('dddd MMMM DD, YYYY')
const timeFormat = dayjs.unix(calendar?.time).format('h:mm A')
console.log(calendar?.time)

const handleDelete = (id) => {
  fetch(`/calendars/${id}`, {
    method: "DELETE"
  })
    // .then((response) => response.json())
    // .then(() => {
    //   const updatedPaths = yourPaths.filter(path => path.id !== id)
   
    // });
    const updatedCalendar = calendars.filter(barter => barter.id !== id)
    setCalendars(updatedCalendar);
};

const handleComplete = () => {
  const completeValue = {
    complete: true
  };

  fetch(`/calendars/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(completeValue),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const updatedScheduledCalender = calendars.map(cal =>{
      if (cal.id === data.id) return {...cal, agreed: data.complete}
      else return cal
      })
      setCalendars(updatedScheduledCalender );
    });
};

const[isComplete, setIsComplete] = useState(true)
  return (
    <div>
    <div className= "mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100 hover:shadow-xl">
     
     <div className ="flex justify-center mb-5">
     <p className="text-2xl font-bold"> {calendar?.scheduling_user_id === user?.id ?  "You" : calendar?.scheduling_user?.first_name} scheduled a lesson with&nbsp;</p>

     <p className="text-2xl font-bold" >{calendar?.recipient_user_id === user?.id ?  "You" : calendar?.recipient_user?.first_name}
</p> 
     </div>
     <div className="flex justify-center mb-1">
     <p className="text-2xl text-indigo-700 ">{dateFormat}</p> 
     </div> 
     <p className ="font-extrabold mb-5 flex justify-center text-2xl text-transparent transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:scale-110">{timeFormat}</p> 
     <div className ="flex justify-center ">
     <p className="text-2xl " >{calendar?.user_skill?.name} Lesson</p> 
     </div>
     <div className ="flex justify-center mb-5">
     <p className="text-indigo-700 text-xl font-bold" >{calendar?.hours === 1 ? calendar?.hours + ' hour' : calendar?.hours+ ' hours'}</p> 
     </div>

     {isComplete ?
     < div className ="flex justify-center">
     <button 
     onClick={()=>  handleDelete(id)} 
     className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Cancel</button>
  
     <button 
     onClick={()=>{
      handleComplete()
      setIsComplete(!isComplete)}}
      className=" ml-7 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Mark As Complete</button>
     </div>  :  < div className ="flex justify-center">
  
     <button 
      className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Completed!</button>
     </div> }
    </div>
  </div>
  )
}

export default CalendarCardScheduled
