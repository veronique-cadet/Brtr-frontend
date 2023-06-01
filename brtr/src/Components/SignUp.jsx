import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp({ user, setUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("clicked");

    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: signUpEmail,
        password: signUpPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .then(navigate("/browse"));
  };

  return (
    <section className="h-screen overflow-auto bg-white relative min-h-screen">
      <div className="flex flex-wrap h-screen ">
        <div className=" h-screen w-1/2 px-8 ">
          <div className="container ">
            <div className="flex flex-wrap h-screen">
              <div className="w-full ">
                <div className="pt-7 mx-auto ">
                  <div className="flex flex-wrap items-center justify-between mb-8 -m-2 relative z-10">
                    <div className="w-auto p-2">
                      <Link to="/">
                        <a className="flex" href="#">
                          <img
                            src="https://static.shuffle.dev/uploads/files/11/1123476d9be8468fa957a4f3118397d3cb484572/image-720-1.png"
                            alt=""
                            className="h-14"
                          />
                          <p className="mt-1 text-4xl font-bold">artr</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="">
                    <div className="absolute inset-0 flex items-center justify-center ">
                      <div className="flex flex-col items-center mt-14">
                        <h2 className="mb-2  px-2 text-center text-3xl md:text-4xl 2xl:text-5xl font-bold leading-tight font-heading tracking-px-n">
                          Create a free account!
                        </h2>
                        <p className="md:text-2xl text-xl font-medium leading-relaxed text-amber-500 mb-6 text-center">
                          Start Bartering Today!
                        </p>

                        <form className="px-12 md:px-32 mx-auto">
                          <label className="block mb-5">
                            <input
                              className="px-2 py-2  w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                              type="text"
                              placeholder="First Name"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </label>
                          <label className="block mb-5">
                            <input
                              className="px-4 py-2  w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                              type="text"
                              placeholder="Last Name"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </label>
                          <label className="block mb-5">
                            <input
                              className="py-2 px-4 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                              type="text"
                              placeholder="Email"
                              value={signUpEmail}
                              onChange={(e) => setSignUpEmail(e.target.value)}
                            />
                          </label>
                          <label className="block mb-5">
                            <input
                              className="py-2 px-4 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                              type="password"
                              placeholder="Password"
                              value={signUpPassword}
                              onChange={(e) =>
                                setSignUpPassword(e.target.value)
                              }
                            />
                          </label>
                          <div className="flex flex-wrap justify-between mb-4">
                            <div className="w-full">
                              <div className="flex items-center">
                                <input
                                  className="w-4 h-4"
                                  id="default-checkbox"
                                  type="checkbox"
                                  value=""
                                />
                                <label
                                  className="ml-2 text-xs md:text-sm font-medium text-gray-900"
                                  for="default-checkbox"
                                >
                                  <span>By signing up, I agree to the</span>
                                  <a
                                    className="text-amber-500 hover:text-indigo-700"
                                    href="#"
                                  >
                                    &nbsp;Terms &amp; Conditions
                                  </a>
                                  <span>&nbsp;of Bartr</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={handleSignUp}
                            className="w-1/2 py-3  md:w-1/3 md:py-3 md:mt-6 font-semibold text-white transition duration-200 ease-in-out bg-amber-500 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700 flex items-center justify-center mx-auto "
                            type="button"
                          >
                            Sign Up!
                          </button>
                          <p className="text-center">
                  <span className="text-xs font-medium">
                    Already have an account?
                  </span>
                  <a
                    className="mt-5 inline-block text-xs font-medium text-indigo-500 hover:text-amber-500 hover:underline"
                    href="#"
                  >
                    <Link to="/login">&nbsp;Log In</Link>
                  </a>
                </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-screen w-1/2">
          <div className=" h-screen  bg-gradient-to-r bg-clip-border from-indigo-500 via-orange-200 to-indigo-200">
            {/* <div className="h-screen p-16 text-center">
        <img className="mx-auto transition duration-1000 ease-in-out transform hover:scale-105" src="" alt=""/><h2 className="mb-5 text-5xl font-semibold leading-tight text-white tracking-px-n" ></h2>
        <p className="mx-auto mb-24 text-lg font-medium leading-normal text-white text-opacity-80 md:max-w-md" ></p>
        <div className="flex flex-wrap justify-center items-center -m-1.5">
          <div className="w-auto p-1.5"></div>
          <div className="w-auto p-1.5"></div>

        </div>
      </div> */}
            <div className="flex flex-wrap items-center justify-end pr-8 pt-9 relative z-10">
              <div className="w-auto p-2">
                <Link to="/login">
                  <a
                    className="font-medium leading-relaxed  text-indigo-500 hover:text-amber-500 "
                    href="#"
                  >
                    Log In
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
