import React from "react";
import { Link } from "react-router-dom";

function SkillCaraouselCard({ skill }) {
  return (
    <div className=" p-8 md:w-96">
      <div className=" transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-border bg-slate-200 animate-text hover:scale-125 border rounded-xl border-coolGray-100 shadow-dashboard hover:bg-indigo-100 hover:shadow-2xl bg-opacity-90">
        <div className="flex items-center justify-center p-10 pb-4 -m-2 ">
          <div className="w-full p-2 lg:w-auto">
            <div className="items-center m-2">
              <div className="w-auto">
                <h2 className="text-center text-2xl font-bold text-transparent transition duration-500 ease-in-out first-letter:leading-none font-heading  bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text ">{skill?.name}</h2>
              </div>
            </div>
          </div>
          <div className="w-full p-2 lg:w-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center p-6">
          <div className="w-full lg:w-auto">
            <Link to="/skillsearchlist" state={{ from: skill }}>
              <button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-amber-500 border rounded-md hover:bg-indigo-500 shadow-button">
                <p>Search Now!</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCaraouselCard;
