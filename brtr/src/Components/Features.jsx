import React from "react";

function Features() {
  return (
    <div className="">
      <section className="py-6 md:py-10 lg:py-12 bg-slate-100 overflow-hidden ">
        <div className="container   md:mx-auto mx-auto">
          <div className="md:mx-auto flex md:items-center ">
            <div className=" w-1/3 md:p-8 p-2">
              <div className="md:max-w-sm">
                <div className="flex flex-wrap items-center md:-m-3 justify-center">
                  <div className="w-auto md:p-3 ">
                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:w-20 lg:h-20 bg-indigo-100 rounded-full hover:scale-150 ">
                      <img src="./barter2.png" alt="" />
                    </div>
                  </div>
                  <div className="md:flex-1 md:p-2 md:mt-0 mt-2">
                    <h3 className="text-sm lg:text-lg font-semibold ml-2 md:ml-0 text-center md:text-left">
                      Learn More, Spend Less - Barter Your Skills and Save!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 md:p-8 p-2">
              <div className="md:max-w-sm">
                <div className="flex flex-wrap items-center md:-m-3 justify-center">
                  <div className="w-auto md:p-3">
                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:w-20 lg:h-20 bg-indigo-100 rounded-full hover:scale-150">
                      <img src="./barter1.png" alt="" />
                    </div>
                  </div>
                  <div className="md:flex-1 md:p-2 md:mt-0 mt-2">
                    <h3 className="text-sm lg:text-lg font-semibold text-center md:text-left">
                      Exchange Skills and Watch Your Capabilities Grow! 
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 md:p-8 p-2">
              <div className="md:max-w-sm">
                <div className="flex flex-wrap items-center md:-m-3 justify-center">
                  <div className="w-auto md:p-3">
                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:w-20 lg:h-20 bg-indigo-100 rounded-full hover:scale-150">
                      <img src="./barter3.png" alt="" />
                    </div>
                  </div>
                  <div className="md:flex-1 md:p-2 md:mt-0 mt-2">
                    <h3 className="text-sm  lg:text-lg font-semibold text-center md:text-left">
                      Connect with Skilled Professionals Today!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
