import React, { useState, useEffect } from 'react'
import NavBarTwo from './NavBarTwo'
import { useLocation } from "react-router-dom";
import SkillUserCard from './SkillUserCard';
import Footer from './Footer';

function ListofUsers({setUser}) {
 const skill = useLocation();
 const { from } = skill.state?.from;
 console.log(skill.state?.from.name);
 const id = skill.state?.from.id;

 const [currentSkill, setCurrentSkill] = useState({})
 const [userSkills, setUserSkills] = useState([])

useEffect(() => {
    fetch(`/skills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentSkill(data);
        console.log(data);
        // console.log("???");
        // console.log(currentCareer);
      });
    }, []);

useEffect(() => {
fetch("/user_skills")
  .then((res) => res.json())
  .then((data) => {
    setUserSkills(data);
    console.log(data);
          });
      }, []);

// const skillUsers =  currentSkill.users.map((skillUser)=>{
//     return <SkillUserCard key={skillUser.id} skillUser={skillUser} />
//   })

const filteredSkills = userSkills.filter((uSkill) => {
    if (currentSkill.id) return currentSkill.id === uSkill.skill.id;
    else return uSkill;
})

const userCard = filteredSkills.map((skill) => {
    return (
      <SkillUserCard
        skill={skill}
        key={skill.id}
        id={skill.id}
      />
    );
  })

console.log(filteredSkills)

  return (

<div className="">
<NavBarTwo setUser={setUser}/>
<div className="h-screen">
  <div className=" border-b-2 ">
<h2 class="px-4 container mx-auto mt-14 text-5xl font-bold leading-tight text-transparent transition duration-500 ease-in-out font-heading md:text-6xl bg-gradient-to-r bg-clip-text from-black via-black to-black animate-text hover:-translate-y-4 first-letter:leading-none">Skilled Professionals for </h2>
<h2 class=" px-4 container mx-auto mb-10 text-3xl font-bold leading-tight text-transparent transition duration-500 ease-in-out font-heading md:text-4xl bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:-translate-y-4 first-letter:leading-none">{currentSkill.name} </h2>

</div>
<section className="py-4 ">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -m-3  pt-4  shadow-3xl">
   {userCard}
    </div>
  </div>

</section> 
</div>
  <Footer /></div>
)
}

export default ListofUsers