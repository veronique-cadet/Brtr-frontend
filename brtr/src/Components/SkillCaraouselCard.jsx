import React from 'react'

function SkillCaraouselCard({skill}) {
  return (
    <div className=" p-8 md:w-96">
      <div className="transition duration-200 bg-slate-100 border rounded-md border-coolGray-100 shadow-dashboard hover:bg-white hover:shadow-2xl">
        <div className="flex flex-wrap items-center justify-center p-10 pb-4 -m-2 ">
          <div className="w-full p-2 lg:w-auto">
            <div className="items-center m-2">
              <div className="w-10 h-10 flex justify-center">
                <img
                  src="./logo.png"
                  alt=""
                />
              </div>
              <div className="w-auto">
                <h2 className="text-xl font-medium text-indigo-800">
                  {skill?.name}
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full p-2 lg:w-auto"></div>
        </div>
        
  
        <div className="flex flex-wrap justify-center p-6">
          <div className="w-full lg:w-auto">
              <button
                className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-amber-500 border border-amber-500 rounded-md hover:bg-indigo-500 shadow-button"
              >
                <p>Search Now!</p>
              </button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default SkillCaraouselCard