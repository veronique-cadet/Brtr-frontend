import React from "react";
import { Link } from "react-router-dom";

function SkillCaraouselCard({ skill }) {
  return (
    <div className=" w-full p-8 lg:w-1/3">
      <div className=" transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-border bg-indigo-50  animate-text hover:scale-125 border rounded-xl border-coolGray-100 shadow-dashboard hover:bg-indigo-100 hover:shadow-2xl bg-opacity-50">
        <div className="flex items-center justify-center  p-6 pb-4 h-32">
          <div className="w-full lg:w-auto">
            <div className="items-center m-2">
              <div className="">
                <h2 className="text-xl font-normal text-center text-slate-500">
                  {skill?.name}
                </h2>
              </div>
            </div>
          </div>
          {/* <div className="w-full p-2 lg:w-auto"></div> */}
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-auto">
            <Link to="/skillsearchlist" state={{ from: skill }}>
              <button className="mb-6 flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-amber-500 border rounded-md hover:bg-indigo-500 shadow-button">
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
