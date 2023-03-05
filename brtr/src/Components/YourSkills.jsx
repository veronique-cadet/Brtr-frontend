import React, {useEffect, useState} from 'react'
import NavBarTwo from './NavBarTwo'
import { Link } from "react-router-dom"
import Footer from './Footer'
import YourSkillsCard from './YourSkillsCard'

function YourSkills({setUser, user}) {

const [userSkills, setUserSkills] = useState([])
const [newProof, setNewProof] = useState("")
const [newUrl, setNewUrl] = useState("")
const [newYears, setNewYears] = useState("")
const [newSkill, setNewSkill] = useState("")
const [skills, setSkills] = useState([])
const [isClicked, setIsClicked] = useState(true)


  useEffect(() => {
    fetch("/user_skills")
      .then((response) => response.json())
      .then((data) => {
        setUserSkills(data);
        console.log(data);
      });
  }, []);


const filteredSkills = userSkills.filter((userSkill) => {
  if ((user?.id === userSkill?.user?.id)) {
    return true;
  }
  return false;
});

const userSkillCard = filteredSkills?.map((userSkill)=>{return <YourSkillsCard filteredSkills={filteredSkills} key={userSkill.id} id={userSkill.id} userSkill={userSkill} setUserSkills={setUserSkills} userSkills={userSkills}/>})


const newUserSkill ={
  proof_des: newProof,
  proof_url: newUrl,
  years_exp: newYears,
  user_id: user?.id,
  skill_id: parseInt(newSkill)
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
console.log(skills)

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
      <div className="relative z-10 inline-flex flex-wrap items-center m-5">
      <button className="pt-5 pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " onClick={()=> {
      setIsClicked(!isClicked)}} >Add New Skill</button>
      <Link to="/yourprofile">
      <button className=" pt-5 ml-7 pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500">Back to Profile</button></Link>
  </div>
      <div className="absolute mt-10 bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
    </div>
  </div>
</section>


    <div className="flex flex-wrap -m-1.5 mb-10">
      <div className="w-full p-1.5">
      {userSkillCard}
      </div>
    </div>
  </div>
</section>

{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}
{/* form starts here  */}


<section class="bg-coolGray-50 py-4"><div class="container px-4 mx-auto">
  <div class="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
    <div class="pb-6 border-b border-coolGray-100">
      <div class="flex flex-wrap items-center justify-between -m-2">
        <div class="w-full md:w-auto p-2">
          <h2 class="text-coolGray-900 text-lg font-semibold" contenteditable="false">Add A New Skill!</h2>
          <p class="text-xs text-coolGray-500 font-medium">Look at You! Talented Rockstar!</p>
        </div>
        <div class="w-full md:w-auto p-2">
          <div class="flex flex-wrap justify-between -m-1.5">
            <div class="w-full md:w-auto p-1.5">
              <button class="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                <p>Cancel</p>
              </button>
            </div>
            <div class="w-full md:w-auto p-1.5">
              <button class="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                <p>Save</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 border-b border-coolGray-100">
      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap -m-3">
          <div class="w-full md:w-1/3 p-3">
            <p class="text-sm text-coolGray-800 font-semibold">Skill</p>
          </div>
          <div class="w-full md:flex-1 p-3">
            <div class="relative">
              <svg class="absolute right-4 top-1/2 transform -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z" fill="#8896AB"></path></svg><select class="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input"><option>Central Daylight Time (GMT-5) UTC-08:00</option><option>Central Daylight Time (GMT-5) UTC-08:00</option><option>Central Daylight Time (GMT-5) UTC-08:00</option></select></div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 border-b border-coolGray-100">
      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap -m-3">
          <div class="w-full md:w-1/3 p-3">
            <p class="text-sm text-coolGray-800 font-semibold" contenteditable="true">Years of Experience</p>
          </div>
          <div class="w-full md:flex-1 p-3">
            <input class="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="johndoe@flex.co"></div>
        </div>
      </div>
    </div>

    <div class="py-6 border-b border-coolGray-100">
      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap -m-3">
          <div class="w-full md:w-1/3 p-3">
            <p class="text-sm text-coolGray-800 font-semibold">Skill Proof</p>
          </div>
          <div class="w-full md:flex-1 p-3">
            <input class="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="Frontend Developer"></div>
        </div>
      </div>
    </div>





    <div class="pt-6">
      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap -m-3">
          <div class="w-full md:w-1/3 p-3">
            <p class="text-sm text-coolGray-800 font-semibold" contenteditable="false">Skill Description</p>
            <p class="text-xs text-coolGray-500 font-medium">Describe Your Experience in this Skill</p>
          </div>
          <div class="w-full md:flex-1 p-3"><textarea class="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input resize-none"></textarea></div>
        </div>
      </div>
    </div>
  </div>
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
      <button className="pt-5 pb-10 f group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " onClick={()=> {
      setIsClicked(!isClicked)}} >Add New Skill</button>
      <Link to="/yourprofile">
      <button className=" pt-5 ml-7 pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent  bg-clip-text hover:bg-gradient-to-r from-amber-500 font-bold">Back to Profile</button></Link>
  </div>
    <div className="mt-10 absolute bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
    </div>
  </div>
</section>

{/* barters listed */}
    <div className="flex flex-wrap -m-1.5 mb-10">
      <div className="w-full p-1.5">
     
      </div>
    </div>
  </div>
</section>

<Footer/></div>
}
</div>
  )
}

export default YourSkills