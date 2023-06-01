import React, {useState} from 'react'
import SkillCaraouselCard from './SkillCaraouselCard'
import { Link } from "react-router-dom";

function SkillCaraousel({skills}) {

console.log(skills)
console.log(skills.slice(0,3))

  return (
    <div className="py-6">
        <div className="flex justify-center">
          <div className="flex flex-wrap -m-3">
          {skills.slice(0, 3).map(skill => (
         <SkillCaraouselCard key={skill.id} skill={skill} />))}            
          </div>
        </div>
    </div>
  )
}

export default SkillCaraousel;
