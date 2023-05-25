import React from "react";

function Features() {
  return (
    <div className="">
      <section className="py-8 md:py-16 lg:py-12 bg-slate-100 overflow-hidden ">
        <div className="container   md:mx-auto mx-auto">
          <div className="md:mx-auto flex md:flex-row flex-col  md:items-center ">
            <div className=" md:w-1/3 md:p-8 p-2">
              <div className="md:max-w-sm">
                <div className="flex flex-wrap items-center md:-m-3 justify-center">
                  <div className="w-auto md:p-3 ">
                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:w-20 lg:h-20 bg-indigo-100 rounded-full hover:scale-150 ">
                      <img src="./barter2.png" alt="" />
                    </div>
                  </div>
                  <div className="md:flex-1 md:p-2">
                    <h3 className="text-sm lg:text-lg font-semibold ml-2 md:ml-0 ">
                      Learn More, Spend Less - Barter Your Skills and Save!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 md:p-8 p-1">
              <div className="md:max-w-sm">
                <div className="flex flex-wrap items-center md:-m-3 justify-center">
                  <div className="w-auto md:p-3">
                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:w-20 lg:h-20 bg-indigo-100 rounded-full hover:scale-150">
                      <img src="./barter1.png" alt="" />
                    </div>
                  </div>
                  <div className="md:flex-1 p-2">
                    <h3 className="text-sm lg:text-lg font-semibold">
                      Exchange Skills and Watch Your Capabilities Grow!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:w-1/3 md:p-8 p-1">
              <div className="md:max-w-sm">
                <div className="flex  items-center md:-m-3 justify-center">
                  <div className="w-auto md:p-3">
                    <div className="flex items-center justify-centerh-12 w-12 md:h-16 md:w-16 lg:w-20 lg:h-20 bg-indigo-100 rounded-full hover:scale-150">
                      <img src="./barter3.png" alt="" />
                    </div>
                  </div>
                  <div className="md:flex-1 p-2">
                    <h3 className="text-sm  lg:text-lg font-semibold">
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
