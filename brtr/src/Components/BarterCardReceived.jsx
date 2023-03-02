import React from 'react'

function BarterCardReceived({yourBarters, barter, setYourBarters, id}) {

  const handleDelete = (id) => {
    fetch(`/barters/${id}`, {
      method: "DELETE"
    })
      // .then((response) => response.json())
      // .then(() => {
      //   const updatedPaths = yourPaths.filter(path => path.id !== id)
     
      // });
      const updatedbarters = yourBarters.filter(barter => barter.id !== id)
      setYourBarters(updatedbarters);
  };
 
  return (
  <div>
    <div className= "mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100">
     
     <div className ="flex justify-center mb-5">
     <p className="text-2xl">{barter?.proposer?.first_name} is requesting&nbsp;</p>
     <p className="text-2xl font-extrabold text-indigo-700 "> {barter?.recipient_hours} hours&nbsp;</p> 
     <p className="text-2xl ">of {barter?.recipient_skill?.name}</p> 
     </div>
     <p className ="font-extrabold mb-5 flex justify-center text-xl text-transparent transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:-translate-y-4">In Exchange For</p> 
     <div className="flex justify-center mb-10">
     <p className="text-2xl font-extrabold text-indigo-700">{barter?.proposer_hours} hours&nbsp;</p> 
     <p className="text-2xl">of {barter?.proposer_skill?.name}</p> 
     </div>
     < div className ="flex justify-center">
     <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">View Profile</button>
     <button className=" ml-7 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Accept</button>
     <button 
     onClick={()=>  handleDelete(id)}
     className=" ml-7 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Decline</button>
     </div>
    </div>
  </div>
  )
}

export default BarterCardReceived