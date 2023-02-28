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

<div>
<NavBarTwo setUser={setUser}/>
<div className="h-screen">
<h2 class="ml-36 mt-14 text-5xl font-bold leading-tight text-transparent transition duration-500 ease-in-out font-heading md:text-6xl bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:-translate-y-4">Skilled Professionals for {currentSkill.name} </h2>
<p class=" ml-36 mt-5 mb-20 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit eaque totam aliquid veritatis assumenda temporibus harum unde!</p>
<section className="py-4 bg-coolGray-50">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -m-3">
   {userCard}
    </div>
  </div>

</section> 
</div>
  <Footer /></div>
)
}

export default ListofUsers