import React from 'react'

function CalCompleteCard({calendar, user, id, calendars, setCalendars}) {



  return (
    <div>
    <div className= "mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100 hover:shadow-xl">
     
     <div className ="flex justify-center mb-5">
     <p className="text-2xl font-bold"> {calendar?.scheduling_user_id === user?.id ?  "You" : calendar?.scheduling_user?.first_name} scheduled a lesson with&nbsp;</p>

     <p className="text-2xl font-bold" >{calendar?.recipient_user_id === user?.id ?  "You" : calendar?.recipient_user?.first_name}
</p> 
     </div>
     <div className="flex justify-center mb-2">
     <p className="text-2xl mb-2 ">{calendar?.date} hey</p> 
     </div> 
     <p className ="font-extrabold mb-5 flex justify-center text-xl text-transparent transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:-translate-y-4">{calendar?.time} hi</p> 
     <div className ="flex justify-center ">
     <p className="text-2xl font-normal" >{calendar?.user_skill?.name} Lesson</p> 
     </div>
     <div className ="flex justify-center mb-5">
     <p className="text-indigo-700 text-xl font-bold" >{calendar?.hours === 1 ? calendar?.hours + ' hour' : calendar?.hours+ ' hours'}</p> 
     </div>

    
     < div className ="flex justify-center">
     <button  
     className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Leave A Review!</button>

     </div>  
    </div>
  </div>
  )
}

export default CalCompleteCard