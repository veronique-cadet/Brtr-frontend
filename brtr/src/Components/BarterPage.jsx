import React,{useState, useEffect} from 'react'
import NavBarTwo from './NavBarTwo'

function BarterPage({setUser, yourBarters, setYourBarters, user}) {

  useEffect(() => {
    fetch("/barters")
      .then((response) => response.json())
      .then((data) => {
        setYourBarters(data);
        console.log(data);
      });
  }, []);

  



  return (
    <div><NavBarTwo setUser={setUser} />
  <section className="pt-24 pb-36 bg-white overflow-hidden">
  <div className="container px-4 mx-auto">
    <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">{user?.first_name} {user?.last_name}</p>
    <h2 className="mb- text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Your Barters</h2>

    {/* //nav for barters// */}
    <section className="py-4 overflow-hidden ">
  <div className="container px-4 mx-auto">
    <div className="relative flex justify-center">
      <ul className="relative z-10 inline-flex flex-wrap items-center -m-5">
        <li className="p-5"><a className="group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-medium bg-clip-text hover:bg-gradient-to-r from-amber-500 " href="#"><span className="inline-block pb-5">Recieved Barters</span>
          <div className="h-0.5 bg-transparent hover:bg-gradient-to-r from-indigo-500"></div></a></li>
        <li className="p-5"><a className="group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-medium bg-clip-text hover:bg-gradient-to-r from-amber-500 " href="#"><span className="inline-block pb-5">Proposed Barters</span>
          <div className="h-0.5 bg-transparent hover:bg-gradient-purple-left"></div></a></li>
        <li className="p-5"><a className="group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-medium bg-clip-text hover:bg-gradient-to-r from-amber-500 " href="#"><span className="inline-block pb-5">Agreed Barters</span>
          <div className="h-0.5 bg-transparenhover:bg-gradient-purple-left"></div></a></li>
    
      </ul>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
    </div>
  </div>
</section>

{/* barters listed */}
    <div className="flex flex-wrap -m-1.5 mb-10">
      <div className="w-full p-1.5">
        <a href="#">
          <div className="p-10 h-full hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100">
            <div className="flex flex-wrap justify-between -m-2">
              <div className="w-auto p-2">
                <h3 className="mb-4 text-lg font-bold font-heading leading-snug">Front-end Developer</h3>
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
                          <path d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div>
                      <div className="w-auto p-1">
                        <p className="font-medium leading-relaxed">Remote/NY</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div>
                      <div className="w-auto p-1">
                        <p className="font-medium leading-relaxed">Full-time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-auto self-end p-2">
                <div className="flex justify-center items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal" href="#">
                  <span className="mr-2.5">See Details</span>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section></div>
  )
}

export default BarterPage