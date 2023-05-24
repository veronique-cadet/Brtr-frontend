import React from 'react'

function Features() {
  return (
    <div><section className="py-20 bg-slate-100 overflow-hidden ">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap items-center -m-8">
        <div className="w-full md:w-1/3 p-8">
          <div className="md:max-w-sm">
            <div className="flex flex-wrap items-center -m-3">
              <div className="w-auto p-3">
                <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full hover:scale-150">
                  <img src="./barter2.png" alt=""/>
                </div>
              </div>
              <div className="flex-1 p-3">
                <h3 className="text-lg font-semibold">Learn More, Spend Less - Barter Your Skills and Save!</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-8">
          <div className="md:max-w-sm">
            <div className="flex flex-wrap items-center -m-3">
              <div className="w-auto p-3">
                <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full hover:scale-150">
                 <img src="./barter1.png" alt=""/>
                </div>
              </div>
              <div className="flex-1 p-3">
                <h3 className="text-lg font-semibold">Exchange Skills and Watch Your Capabilities Grow!</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-8">
          <div className="md:max-w-sm">
            <div className="flex  items-center -m-3">
              <div className="w-auto p-3">
                <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full hover:scale-150">
                <img src="./barter3.png" alt=""/>
                </div>
              </div>
              <div className="flex-1 p-3">
                <h3 className="text-lg font-semibold">Connect with Skilled Professionals Today!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Features