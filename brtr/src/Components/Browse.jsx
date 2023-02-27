import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';
import NavBarThree from './NavBarThree';

function Browse({user, setUser}) {

  const [searchTerm, setSearchedTerm] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([])

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
<div className="">
<NavBarThree setUser={setUser} />
  <section className="h-screen pt-32 pb-16 overflow-auto bg-fixed bg-white bg-center bg-no-repeat bg-cover xl:pt-64" style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1436831135709-48bdc150cce5?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxOHx8Z3VpdGFyJTIwbGVzc29uc3xlbnwwfHx8fDE2Nzc0MzMzMzU&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920')",  backgroundSize: "cover"}}>
  <div className="container px-4 mx-auto">
    <div className="px-20 py-16 mt-20 bg-black bg-opacity-80 rounded-3xl" style={{backdropFilter: "blur(37px)"}}>
      <h1 className="mt-2 mb-10 text-5xl font-bold leading-tight text-transparent transition duration-500 ease-in-out font-heading md:text-6xl bg-gradient-to-r bg-clip-text from-white via-orange-500 to-white animate-text hover:-translate-y-4" >{user?.first_name}, Start Bartering Today!</h1>
      <div className="flex">
        <input className="block w-8/12 px-4 py-3 mb-2 mr-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none md:mb-0 focus:bg-white focus:border-gray-500 focus:outline-none" type="text" 
        placeholder="Search for Skilled Professionals to Barter With Now!" 
        value={searchTerm}
        onChange={handleFilter}
        />
        <Link to="/skillsearchlist" state={{ from: skill }}>
        <button className="px-6 py-4 pl-2 font-semibold text-center text-white transition duration-200 ease-in-out bg-indigo-600 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700 w-96 " type="button">Search</button> </Link>
      </div>
      {filteredSearch.length != 0 && (
            <div className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-200 rounded-lg shadow-input">
                   {filteredSearch.slice(0, 15).map((value, key) => {
                          return (
                            <a
                              className="w-1/2 px-1 py-1 text-base font-normal text-white outline-none borderrounded-lg focus:border-indigo-500 shadow-input break-after-all"
                              href={value.link}
                              target="_blank"
                              onClick={() => {
                                setSearchedTerm(value.name);
                                setSkill(value)
                                console.log(value)
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
</section>
<Footer />
    </div>
  )
}

export default Browse