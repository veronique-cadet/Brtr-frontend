import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBarTwo from "./NavBarTwo";
import SkillCaraousel from "./SkillCaraousel";

function Browse({ user, setUser }) {
  const [searchTerm, setSearchedTerm] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    fetch("/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        console.log(data);
      });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchedTerm(searchWord);
    const newFilter = skills.filter((skill) => {
      return skill.name.toLowerCase().includes(searchTerm.toLowerCase());
      console.log(skill.name);
    });
    if (searchWord === "") {
      setFilteredSearch([]);
    } else {
      setFilteredSearch(newFilter);
    }
    // console.log(searchWord)
  };

  return (
    <div className="bg-slate-100">
      <NavBarTwo setUser={setUser} />
      <section className="h-screen relative bg-transparent mb-20">
        

        <div className="container px-4 mx-auto mt-24 ">
          <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">
            {" "}
            Search For Skilled Professionals to Bartr With
          </p>
          <h2 className="text-center mb-10 text-6xl font-bold text-transparent transition duration-500 ease-in-out first-letter:leading-none md:text-7xl lg:text-10xl font-heading  bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:scale-125">
            {user?.first_name}, Start Bartering Today!
          </h2>
          <div className=" bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>

          <div className="mx-auto mt-8 p-10 h-full w-4/6 hover:bg-slate-300 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-200">
            <div className="flex justify-center">
              <input
                className="block w-full px-4 py-3 mb-2 mr-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded appearance-none md:mb-0 focus:bg-white focus:border-gray-500 focus:outline-none"
                type="text"
                placeholder="Search for Skilled Professionals to Barter With Now!"
                value={searchTerm}
                onChange={handleFilter}
              />
              <Link to="/skillsearchlist" state={{ from: skill }}>
                <button
                  className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 "
                  type="button"
                >
                  Search
                </button>{" "}
              </Link>
            </div>
            {filteredSearch.length != 0 && (
              <div className="w-full px-4 py-2.5 text-base rounded-lg shadow-input">
                {filteredSearch.slice(0, 15).map((value, key) => {
                  return (
                    <a
                      className="w-1/2 px-1 py-1 text-base font-bold text-amber-500 outline-no  rounded-lg hover:text-indigo-600 shadow-input break-after-all"
                      href={value.link}
                      target="_blank"
                      onClick={() => {
                        setSearchedTerm(value.name);
                        setSkill(value);
                        console.log(value);
                      }}
                    >
                      <p>{value.name} </p>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <h1 className="mt-16 text-center text-3xl text-indigo-700 transition duration-500 ease-in-out  md:text-3xl lg:text-3xl font-heading  bg-gradient-to-r bg-clip-text font-bold hover:scale-110 animate-bounce">
          Here Are Some Skills You Can Learn!
        </h1>
        <div className=" mt-2 bottom-0 left-0 w-2/6 h-0.5 bg-neutral-100 mx-auto"></div>
        <SkillCaraousel skills={skills} />
      </section>

      <Footer />
    </div>
  );
}

export default Browse;
