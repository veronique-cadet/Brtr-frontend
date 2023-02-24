import React from 'react'
import NavBar from './NavBar'
import Features from './Features'
import Footer from './Footer'
import HowItWorks from './HowItWorks'
import { Link } from "react-router-dom"

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
                <p className="text-lg font-medium mb-11 md:max-w-md">Exchange Your Skills, Build Your Network - Join Our Bartering Community Now!</p>
                <div className="flex flex-wrap -m-2.5 mb-20">
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                    <Link to="/signup">
                      <button className="w-full px-6 py-4 font-semibold text-white transition duration-500 ease-in-out bg-indigo-500 border border-indigo-500 rounded-xl focus:ring  hover:bg-amber-700  hover:-translate-y-4" type="button">Sign Up for Free!</button></Link>
                    </div>
                  </div>
                  <div className="w-full md:w-auto p-2.5">
                   
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
              
                <img className="  transition duration-1000 ease-in-out transform hover:-translate-y-16 center mt-7 rounded-lg" src="./hero2.jpeg" alt=""/>
      </div>
            </div>
          </div>
        </div>
    </div>
    <Features />
    <HowItWorks />
    <Footer />
    </div>
  )
}

export default Home