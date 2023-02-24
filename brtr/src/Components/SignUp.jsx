import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"

function SignUp() {

const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [signUpEmail,setSignUpEmail] = useState("")
const [signUpPassword,setSignUpPassword] = useState("")
const navigate = useNavigate()

  return (
    <section className="bg-white Class
    Properties
    overflow-auto h-screen"><div className="flex flex-wrap -m-8">
  <div className="w-full md:w-1/2 p-8 h-screen">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full h-screen">
          <div className="md:max-w-lg mx-auto pt-16 md:pb-24">
            <div className="flex flex-wrap items-center justify-between -m-2 mb-24">
              <div className="w-auto p-2">
              <Link to="/">
                <a className="flex" href="#">
                  <img src="https://static.shuffle.dev/uploads/files/11/1123476d9be8468fa957a4f3118397d3cb484572/image-720-1.png" alt="" className="h-14"/><p className="text-4xl font-bold mt-1">artr</p>
                </a>
                </Link>
              </div>
              <div className="w-auto p-2"> <Link to="/login"><a className="text-indigo-600 hover:text-indigo-700 font-medium leading-relaxed" href="#">Log In</a></Link></div>
            </div>
            <div className="md:max-w-sm">
              <h2 className="mb-4 text-5xl font-bold font-heading tracking-px-n leading-tight">Create a free account!</h2>
              <p className="mb-9 text-gray-600 font-medium leading-relaxed" contenteditable="false">Start Bartering Today!</p>
            </div>
            <form className="md:max-w-lg">
              <label className="block mb-5">
                <input 
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" 
                type="text" 
                placeholder="First Name"
                value = {firstName}
                onChange = {(e) => setFirstName(e.target.value)}
                /></label>
              <label className="block mb-5">
                <input 
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  
                type="text" 
                placeholder="Last Name"
                value = {lastName}
                onChange = {(e) => setLastName(e.target.value)}/></label>
              <label className="block mb-5">
                <input 
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                 type="text" 
                 placeholder="Email"
                 value = {signUpEmail}
                 onChange = {(e) => setSignUpEmail(e.target.value)}
                 /></label>
              <label className="block mb-5">
                <input 
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" 
                type="password" 
                placeholder="Password"   
                value = {signUpPassword}
                onChange = {(e) => setSignUpPassword(e.target.value)}/></label>
              <div className="flex flex-wrap justify-between mb-4">
                <div className="w-full">
                  <div className="flex items-center">
                    <input className="w-4 h-4" id="default-checkbox" type="checkbox" value=""/><label className="ml-2 text-sm text-gray-900 font-medium" for="default-checkbox">
                    <span>By signing up, I agree to the</span>
                    <a className="text-amber-500 hover:text-indigo-700" href="#">&nbsp;Terms &amp; Conditions</a>
                    <span>&nbsp;of Bartr</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className="mb-6 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Sign In</button>
              <div className="flex flex-wrap justify-center -m-2.5">
                <div className="w-full p-2.5">
                  <button className="flex items-center justify-center w-full p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                    <img className="mr-3" src="flaro-assets/logos/brands/google.svg" alt=""/>
                      <span className="font-semibold leading-normal">Sign in with Google</span>
                  </button>
                </div>
                <div className="w-full p-2.5">
                  <button className="flex items-center justify-center w-full p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                    <img className="mr-3" src="flaro-assets/logos/brands/fb.svg" alt=""/><span className="font-semibold leading-normal">Sign in with Facebook</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 p-8 h-screen">
    <div className="flex flex-col justify-center h-screen bg-indigo-600">
      <div className="p-16 text-center h-screen">
        <img className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxMXx8cGVvcGxlJTIwb24lMjBjb21wdXRlcnxlbnwwfHx8fDE2NzcyMDI4Njg&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920" alt=""/><h2 className="mb-5 text-5xl text-white font-semibold tracking-px-n leading-tight" contenteditable="false"></h2>
        <p className="mb-24 text-lg text-white text-opacity-80 font-medium leading-normal md:max-w-md mx-auto" contenteditable="false"></p>
        <div className="flex flex-wrap justify-center items-center -m-1.5">
          <div className="w-auto p-1.5"></div>
          <div className="w-auto p-1.5"></div>

        </div>
      </div>
    </div>
  </div>
  </div>
</section>
  )
}

export default SignUp