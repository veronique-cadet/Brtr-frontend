import React from "react";

function HowItWorks() {
  return (
    <div>
      <section className="pt-16 pb-10 md:pb-20 lg:pt-28 lg:pb-36 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="lg:mb-16 md:max-lg:mb-10 mb-2 md:mb-6 flex flex-wrap items-end -m-8">
            <div className="w-full md:w-1/2 md:p-8">
              <h2 className="text-center md:text-left text-3xl sm:max-md:text-4xl md:max-lg:text-5xl lg:text-6xl font-bold font-heading md:tracking-px-n leading-tight md:max-w-xl hover:scale-110">
                Trade Talents, Expand Expertise{" "}
              </h2>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <p className="text-sm sm:max-md:text-base md:text-lg font-medium leading-relaxed md:max-w-lg text-center md:text-left ">
                Revolutionize Your Capabilities - Share Your Skills and Unlock
                Your Potential! Maximize Your Resources, Minimize Your Expenses
                - Trade Talents and Thrive!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-3">
            <div className="w-1/3 p-3">
              <a className="flex justify-center md:block h-full" href="">
                <div className="relative h-full rounded-3xl overflow-hidden">
                  <img
                    className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000 "
                    src="https://images.unsplash.com/photo-1615339725569-80172615f345?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxN3x8cGFpbnRpbmd8ZW58MHx8fHwxNjc3MTIwMDU3&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-6 lg:px-11 lg:py-10">
                    <div
                      className="px-2 py-2 lg:px-8 lg:py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                      style={{
                        webkitBackdropFilter: "blur(5px)",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <h3 className="text-sm lg:text-lg text-white text-center font-semibold">
                        Everyone has a skill! Share yours on Bartr!
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/3 p-3">
              <a className="flex justify-center md:block h-full" href="#">
                <div className="relative h-full rounded-3xl overflow-hidden">
                  <img
                    className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                    src="https://images.unsplash.com/photo-1607459726370-d1abfcda1370?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw3fHxvbiUyMGNvbXB1dGVyfGVufDB8fHx8MTY3NzE2NjE4NA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-6 lg:px-11 lg:py-10">
                    <div
                      className="px-2 py-2 lg:px-8 lg:py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                      style={{
                        webkitBackdropFilter: "blur(5px)",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <h3 className="text-sm lg:text-lg text-white text-center font-semibold">
                        Browse skills you would like to learn from others!
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className=" w-1/3 p-3">
              <a className="flex justify-center md:block h-full" href="#">
                <div className="relative h-full rounded-3xl overflow-hidden">
                  <img
                    className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                    src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxMHx8YWdyZWVtZW50fGVufDB8fHx8MTY3NzE2NjA3Ng&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-6 lg:px-11 lg:py-10">
                    <div
                      className="px-2 py-2 lg:px-8 lg:py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                      style={{
                        webkitBackdropFilter: "blur(5px)",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <h3 className="text-sm lg:text-lg text-white text-center font-semibold">
                        Make a Bartr with someone and learn a new skill!
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
