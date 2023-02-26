import React, {useState, useEffect} from 'react'
import NavBarTwo from './NavBarTwo'

function Browse({user, setUser}) {

  const [searchTerm, setSearchedTerm] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [skills, setSkills] = useState([]);

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
  };




  return (
<div className>
<NavBarTwo setUser={setUser} />
  <section class="xl:pt-64 bg-white bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden pb-16 pt-32 h-screen" style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1436831135709-48bdc150cce5?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxOHx8Z3VpdGFyJTIwbGVzc29uc3xlbnwwfHx8fDE2Nzc0MzMzMzU&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920')",  backgroundSize: "cover"}}>
  <div class="container px-4 mx-auto">
    <div class="py-16 px-20 bg-black bg-opacity-80 rounded-3xl mt-20" style={{backdropFilter: "blur(37px)"}}>
      <h1 class="mt-2 leading-tight font-heading font-bold text-5xl md:text-6xl mb-10 bg-gradient-to-r bg-clip-text  text-transparent  from-white
       via-orange-500 to-white animate-text transition duration-500 ease-in-out hover:-translate-y-4" >{user?.first_name}, Start Bartering Today!</h1>
      <div class="flex">

        <input class="appearance-none block py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none mr-3 w-8/12" type="text" 
        placeholder="Search for Skilled Professionals to Barter With Now!" 
        value={searchTerm}
        onChange={handleFilter}
        /><button class="py-4 text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 pl-2 px-6 text-center w-3/12" type="button">Search</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Browse