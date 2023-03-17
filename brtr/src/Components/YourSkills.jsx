import React, {useEffect, useState} from 'react'
import NavBarTwo from './NavBarTwo'
import { Link } from "react-router-dom"
import Footer from './Footer'
import YourSkillsCard from './YourSkillsCard'
import SkillSubmitted from './SkillSubmitted'

function YourSkills({setUser, user}) {

const [userSkills, setUserSkills] = useState([])
const [newProof, setNewProof] = useState("")
const [newUrl, setNewUrl] = useState("")
const [newYears, setNewYears] = useState("")
const [newSkill, setNewSkill] = useState("")
const [skills, setSkills] = useState([])
const [isClicked, setIsClicked] = useState(true)
const [isSaved, setIsSaved] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  fetch("/user_skills")
    .then((response) => response.json())
    .then((data) => {
      setUserSkills(data);
      setIsLoading(false)
      console.log(data);
    });
}, []);

const newFetch = () =>{
  fetch("/user_skills")
  .then((response) => response.json())
  .then((data) => {
    setUserSkills(data);
    console.log(data);
  });
}


const filteredSkills = userSkills.filter((userSkill) => {
  if ((user?.id === userSkill?.user?.id)) {
    return true;
  }
  return false;
});

const userSkillCard = filteredSkills?.map((userSkill)=>{return <YourSkillsCard filteredSkills={filteredSkills} key={userSkill.id} id={userSkill.id} userSkill={userSkill} setUserSkills={setUserSkills} userSkills={userSkills} 
newFetch={newFetch} />})


const newUserSkill ={
  proof_des: newProof,
  proof_url: newUrl,
  years_exp: newYears,
  user_id: user?.id,
  skill_id: newSkill
}

useEffect(() => {
  fetch("/skills")
    .then((res) => res.json())
    .then((data) => {
      setSkills(data);
      console.log(data);
    });
}, []);

const skillOptions = skills.map((skill)=>{return <option key={skill.id} value={skill.id}>{skill.name}</option>})
console.log(skillOptions)

const handleSubmit = () => {
  fetch("/user_skills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserSkill),
  })
    .then((response) => response.json())
    .then(() => {
      setUserSkills([...filteredSkills, newUserSkill]);
      console.log(newUserSkill)
      
    });
};



  return (
  <div>

  { isClicked ?
  <div className="h-screen"><NavBarTwo setUser={setUser} />
  <section className="pt-24 pb-36 bg-white overflow-auto h-screen">
  <div className="container px-4 mx-auto">
    <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">{user?.first_name} {user?.last_name}</p>
    <h2 className="mb- text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Your Skills</h2>

    {/* //nav for barters// */}
    <section className="py-4 overflow-hidden ">
  <div className="container px-4 mx-auto">
    <div className="relative flex justify-center">
      <div className="relative z-10 inline-flex flex-wrap items-center -m-5">
      <button className="pt-5 pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " onClick={()=> {
      setIsClicked(!isClicked)}} >Add New Skill</button>
      <Link to="/yourprofile">
      <button cd 
      className=" pt-5 ml-7 pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500">Back to Profile</button></Link>
  </div>
      <div className="absolute mt-10 bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
    </div>
  </div>
</section>
{isLoading ? (
           
           <div className="flex-col justify-center">
           <img className="mt-10 mx-auto" src="./loading-buffering.gif" />
           <img className="mt-10 mx-auto" src="./giphy.gif" />
         </div>
    
            ) : (
             <div className="flex flex-wrap -m-1.5 mb-10">
      <div className="w-full p-1.5">
      {userSkillCard}
      </div>
    </div>
            )}

    
  </div>
</section>



<Footer/></div> : 


// SECOND PART
// SECOND 
// SECOND PART
// SECOND PART
// SECOND PART
// SECOND PART
// SECOND PART
// SECOND PART
// SECOND PART
// SECOND PART
// SECOND PART

<div className="h-screen"><NavBarTwo setUser={setUser} />
  <section className="pt-24 pb-36 bg-white overflow-auto h-screen">
  <div className="container px-4 mx-auto">
    <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">{user?.first_name} {user?.last_name}</p>
    <h2 className="mb- text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Your Skills</h2>

    {/* //nav for barters// */}
    <section className="py-4 overflow-hidden ">
  <div className="container px-4 mx-auto">
    <div className="relative flex justify-center">
    <div className="relative z-10 inline-flex flex-wrap items-center -m-5">
    <Link to="/yourskills">
      <button className="pt-5 pb-10 f group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " onClick={()=>{setIsClicked(!isClicked)
      newFetch()
      } } >Back to Your Skills</button></Link>
      <Link to="/yourprofile">
      <button onClick={newFetch()}
      className=" pt-5 ml-7 pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent  bg-clip-text hover:bg-gradient-to-r from-amber-500 font-bold">Back to Profile</button></Link>
  </div>
    <div className="mt-10 absolute bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
    </div>
  </div>
</section>

{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}


<section className=" py-4"><div className="container px-4 mx-auto">
  <div className="p-6 h-full border bg-slate-100 overflow-auto rounded-lg shadow-dashboard">
    <div className="pb-6 border-b border-slate-100">
      <div className="flex flex-wrap items-center justify-between -m-2">
        <div className="w-full md:w-auto p-2">
          <h2 className="text-slate-900 text-lg font-semibold" >Add A New Skill!</h2>
          <p className="text-xs text-indigo-700 font-medium">Look at You! Talented Rockstar!</p>
        </div>
        <div className="w-full md:w-auto p-2">
          <div className="flex flex-wrap justify-between -m-1.5">
            <div className="w-full md:w-auto p-1.5">
            
              <button onClick={()=> {setIsClicked(!isClicked)
              setNewYears("")
              setNewProof("")
              setNewUrl("")
              setNewSkill("")
            }}
               className="flex flex-wrap justify-center w-full px-4 py-2 font-bold text-sm text-slate-500 hover:bg-indigo-500 hover:text-white  bg-white rounded-md shadow-button">
                <p>Cancel</p>
              </button>
          
            </div>
            <div className="w-full md:w-auto p-1.5">
              
           <button 
              onClick={()=> {
                handleSubmit()
                setIsSaved(!isSaved)
                setNewYears("")
                setNewProof("")
                setNewUrl("")
                setNewSkill("")
              }}
              className="flex flex-wrap justify-center w-full px-4 py-2 bg-amber-500 hover:bg-indigo-500 font-medium text-sm text-white border rounded-md shadow-button">Add New Skill</button> 
              
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
              onChange={(e)=> setNewSkill(e.target.value)}
              className=" w-full py-2.5 px-4 text-slate-900 text-base font-normal bg-white border outline-none border-slate-200 focus:border-amber-500 rounded-lg shadow-input">{skillOptions}</select></div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-6 border-b border-slate-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold" contenteditable="true">Years of Experience</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <input 
            value={newYears} onChange={(e)=> setNewYears(e.target.valueAsNumber)}
            className="w-full px-4 py-2.5 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input" type="number"/></div>
        </div>
      </div>
    </div>

    <div className="py-6 border-b border-slate-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold">Skill Proof</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <input
             value={newUrl} 
             onChange={(e)=> setNewUrl(e.target.value)}
            className="w-full px-4 py-2.5 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input" type="text" /></div>
        </div>
      </div>
    </div>





    <div className="pt-6">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <p className="text-sm text-slate-800 font-semibold" contenteditable="false">Skill Description</p>
            <p className="text-xs text-indigo-700 font-bold">Describe Your Experience in this Skill</p>
          </div>
          <div className="w-full md:flex-1 p-3"><textarea
          value={newProof} 
          onChange={(e)=> setNewProof(e.target.value)}
          className="block w-full h-64 p-6 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input resize-none"></textarea></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

  </div>
</section>


<Footer/></div>
}
</div>
  )
}

export default YourSkills