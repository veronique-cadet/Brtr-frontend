import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';
import NavBarTwo from './NavBarTwo';

function Browse({user, setUser, skill, setSkill, handleFilter, searchTerm, setSearchedTerm, filteredSearch, setFilteredSearch}) {

  







  return (
<div className="">
<NavBarTwo setUser={setUser} />
  <section className="h-screen relative bg-transparent">
 
  <div className="container px-4 mx-auto mt-24">
  <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px"> Search For Skilled Professionals to Bartr With</p>
    <h2 className="mb-10 text-5xl md:text-7xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">{user?.first_name}, Start Bartering Today!</h2> 
     <div className=" bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
  
    <div className="mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100">
     
      <div className="flex justify-center">
        <input className="block w-full px-4 py-3 mb-2 mr-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded appearance-none md:mb-0 focus:bg-white focus:border-gray-500 focus:outline-none" type="text" 
        placeholder="Search for Skilled Professionals to Barter With Now!" 
        value={searchTerm}
        onChange={handleFilter}
        />
        <Link to="/skillsearchlist" state={{ from: skill }}>
        <button className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 " type="button">Search</button> </Link>
      </div>
      {filteredSearch.length != 0 && (
            <div className="w-full px-4 py-2.5 text-base rounded-lg shadow-input">
                   {filteredSearch.slice(0, 15).map((value, key) => {
                          return (
                            <a
                              className="w-1/2 px-1 py-1 text-base font-bold text-amber-500 outline-none borderrounded-lg hover:text-indigo-600 shadow-input break-after-all"
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