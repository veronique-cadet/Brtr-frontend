import React, { useState, useEffect } from "react";
import NavBarTwo from "./NavBarTwo";
import { useLocation } from "react-router-dom";
import SkillUserCard from "./SkillUserCard";
import Footer from "./Footer";

function ListofUsers({ setUser, user }) {
  const skill = useLocation();
  const { from } = skill.state?.from;
  console.log(skill.state?.from.name);
  const id = skill.state?.from.id;

  const [currentSkill, setCurrentSkill] = useState({});
  const [userSkills, setUserSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      });
  }, []);

  // const filteredSkills = userSkills.filter((uSkill) => {
  //     if (currentSkill.id) return currentSkill.id === uSkill.skill.id;
  //     else return uSkill;
  // })

  const filteredSkills = userSkills.filter((uSkill) => {
    if (currentSkill.id === uSkill.skill.id && uSkill.user.id !== user?.id) {
      return true;
    }
    return false;
  });

  const userCard = filteredSkills.map((skill) => {
    return <SkillUserCard skill={skill} key={skill.id} id={skill.id} />;
  });

  console.log(filteredSkills);

  return (
    <div className="">
      <NavBarTwo setUser={setUser} />
      <div className="h-screen overflow-auto mb-20">
        <div className="container px-4 mx-auto mt-20">
          <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">
            Skilled Professionals For
          </p>
          <h2 className="mb-10 text-5xl md:text-7xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
            {currentSkill?.name}
          </h2>
          <div className=" bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
        </div>
        <section className="py-4 ">
          <div className="container mx-auto">
            {isLoading ? (
              <div className="flex justify-center ">
                <img className="mt-10" src="./giphy.gif" />
              </div>
            ) : (
              <div className="flex flex-wrap -m-3 pt-4 shadow-3xl">
                {userCard}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ListofUsers;
