import React from 'react'
import { Link } from "react-router-dom"

function LogIn() {
  return (
    <section className="py-16 xl:pb-56 overflow-hidden bg-white h-screen" ><div className="container px-4 mx-auto">
    <div className="text-center max-w-md mx-auto">
    <Link to="/">
      <a className="mb-36 flex justify-center" href="#">
        <img src="https://static.shuffle.dev/uploads/files/11/1123476d9be8468fa957a4f3118397d3cb484572/image-720-1.png" alt="" className="h-14"/><p className="text-4xl font-bold mt-1">artr</p>
      </a>
      </Link>
      <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight">Welcome Back</h2>
      <p className="mb-12 font-medium text-lg text-gray-600 leading-normal">Trade Talents, Expand Expertise </p>
      <form>
        <label className="block mb-5">
          <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput2-1" type="text" placeholder="Email address"/></label>
        <label className="relative block mb-5">
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2"><a className="text-sm text-indigo-600 hover:text-indigo-700 font-medium" href="#">Forgot Password?</a></div>
          <input className="px-4 pr-36 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput2-2" type="password" placeholder="Password"/></label>
        <button className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Sign In</button>
        <p className="font-medium">
          <span>Don’t have an account?</span>
          <Link to="/signup"><a className="text-indigo-600 hover:text-indigo-700" href="#">&nbsp;Create free account</a></Link>
        </p>
      </form>
    </div>
    </div>
  </section>
  )
}

export default LogIn