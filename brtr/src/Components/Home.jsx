import React from 'react'
import NavBar from './NavBar'

function Home() {
  return (
    <div className="bg-slate-100 h-screen"> 
    <NavBar />
    <div className="container mx-auto overflow-hidden">
      
      <div className="pt-16 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full p-8 md:w-1/2">
      
                <h1 className="mb-6 text-6xl font-bold first-letter:leading-none md:text-8xl lg:text-10xl font-heading md:max-w-xl 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-orange-500 to-indigo-500
            animate-text transition duration-500 ease-in-out hover:-translate-y-4">Barter Your Way to Success</h1>
                <p className="text-lg font-medium text-gray-900 mb-11 md:max-w-md">Exchange Your Skills, Build Your Network - Join Our Bartering Community Now!</p>
                <div className="flex flex-wrap -m-2.5 mb-20">
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <button className="w-full px-6 py-4 font-semibold text-white transition duration-500 ease-in-out bg-amber-500 border border-amber-500 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-amber-700  hover:-translate-y-4" type="button">Sign Up for Free!</button>
                    </div>
                  </div>
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <button className="w-full py-4 font-semibold transition duration-500 ease-in-out bg-indigo-500
                       border border-gray-300 px-9 hover:border-gray-400   hover:-translate-y-4 rounded-xl focus:ring focus:ring-gray-50 hover:bg-gray-100" type="button">
                        <div className="flex flex-wrap items-center justify-center -m-1">
      
                          <div className="w-auto p-1">
                            <span>Log In</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="mb-6 text-sm font-semibold text-gray-500 uppercase">TRUSTED AND LOVED BY EVERY PERSON IN THE EMPTY ARRAY FLATIRON COHORT</p>
                <div className="flex flex-wrap -m-3">
                  <div className="w-auto p-3">
      
                  </div>
                  <div className="w-auto p-3">
      
                  </div>
                  <div className="w-auto p-3">
      
                  </div>
                </div>
              </div>
              <div className="w-full p-8 md:w-1/2 ">
              <img className="absolute z-10 -left-10 -top-12 w-18" src="./wave2-violet.svg" alt=""/>
            <img className= "absolute z-10 -right-4 -bottom-4 w-28 md:w-auto" src="./wave3-yellow.svg" alt=""/>
                <img className="  transition duration-1000 ease-in-out transform hover:-translate-y-16 center mt-7 rounded-lg" src="./hero2.jpeg" alt=""/>
      </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home