import React, {useState} from 'react'

function YourSkillsCard({userSkill, id, setUserSkills, userSkills}) {

const [isClicked, setIsClicked] = useState(true)
const [years, setYears] = useState(userSkill?.years_exp)
const [proof, setProof] = useState(userSkill?.proof_des)
const [url, setUrl] = useState(userSkill?.proof_url)


  const handleDelete = (id) => {
    fetch(`/user_skills/${id}`, {
      method: "DELETE"
    })
      // .then((response) => response.json())
      // .then(() => {
      //   const updatedPaths = yourPaths.filter(path => path.id !== id)
     
      // });
      const updatedSkills = userSkills.filter(userSkill => userSkill.id !== id)
      setUserSkills(updatedSkills);
  };


  const editUserSkill ={
    proof_des: proof,
    proof_url: url,
    years_exp: years
    }

    // handleChange = () =>{
    //   fetch(`/barters/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(editUserSkill),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     const updatedSkills = userSkills.map(userSkill =>{
    //     if (userSkill.id === data.id) return {...userSkill, editUserSkill}
    //     else return userSkill
    //     })
    //     setUserSkills(updatedSkills);
    //   });
    // }
    


  return (
<div>
  { isClicked ?
  <div className= "mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100 hover:shadow-xl">
   <div className='flex-col justify-start mb-10'>
     <div className="flex justify-evenly"><div className='flex '><p className='text-xl font-bold text-indigo-500'>Skill:&nbsp;</p><p className='text-xl'>{userSkill?.name}</p>
     </div>
     <div className='flex '><p className='text-xl font-bold text-indigo-500'>Years of Experience:&nbsp;</p><p className='text-xl' > {userSkill?.years_exp === 1 ? userSkill?.years_exp + ' year' : userSkill?.years_exp + ' years'}
</p></div>
     <div className='flex'><p className='text-xl font-bold text-indigo-500'>Skill Proof:&nbsp;</p><p className='text-xl'> {userSkill?.proof_url}</p></div></div>
     <div className='flex-col justify-center mt-5 '><p className=' flex justify-center text-xl font-bold text-indigo-500'>Skill Description:&nbsp;</p><p className='text-xl  flex justify-center'> {userSkill?.proof_des}</p></div>
   </div>

     < div className ="flex justify-center">
     <button onClick={()=> setIsClicked(!isClicked)}className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Update Skill</button>
     <button onClick={()=> handleDelete(id)}className=" ml-7 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Delete Skill</button>
    
     </div>
  </div> :  <div className= "mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100 hover:shadow-xl">
   <div className='flex-col justify-start mb-10'>
     <div className="flex justify-evenly"><div className='flex '><p className='text-xl font-bold text-indigo-500'>Skill:&nbsp;</p><p className='text-xl'>{userSkill?.name}</p>
     </div>
     <div className='flex '><p className='text-xl font-bold text-indigo-500'>Years of Experience:&nbsp;</p>  
     <input className="w-full px-1 py-1 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input" type="text" value={years} onChange={(e) => setYears(e.target.valueAsNumber)}/></div>
     <div className='flex'><p className='text-xl font-bold text-indigo-500'>Skill Proof:&nbsp;</p> <input className="w-full px-1 py-1 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input" type="number" value={proof} onChange={(e) => setProof(e.target.value)}/></div></div>
     <div className='flex-col justify-center mt-5 '><p className=' flex justify-center text-xl font-bold text-indigo-500'>Skill Description:&nbsp;</p> <textarea className="block w-full h-64 p-6 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input resize-none"  value={proof} onChange={(e) => setProof(e.target.value)}></textarea></div>
   </div>

     < div className ="flex justify-center">
     <button onClick={()=> setIsClicked(!isClicked)} className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Update Skill</button>
     <button onClick={()=> handleDelete(id)}className=" ml-7 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">Delete Skill</button>
    
     </div>
  </div>}
</div>
  )
}

export default YourSkillsCard