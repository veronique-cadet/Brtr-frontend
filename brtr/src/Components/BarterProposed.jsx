import React,{useState, useEffect} from 'react'
import NavBarTwo from './NavBarTwo'
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footer';
import BarterCardProposed from './BarterCardProposed';

function BarterProposed({setUser, yourBarters, setYourBarters, user}) {

  useEffect(() => {
    fetch("/barters")
      .then((response) => response.json())
      .then((data) => {
        setYourBarters(data);
        console.log(data);
      });
  }, []);

  const filteredBarters = yourBarters.filter((barter) => {
    if (user) return user?.id === barter?.proposer_id;
    else return barter})

    console.log(filteredBarters)
  
const barterCard = filteredBarters.map((barter) => {
return <BarterCardProposed key= {barter.id} barter={barter}/> })



  return (
    <div><NavBarTwo setUser={setUser} />
  <section className="pt-24 pb-36 bg-white overflow-auto h-screen">
  <div className="container px-4 mx-auto">
    <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">{user?.first_name} {user?.last_name}</p>
    <h2 className="mb- text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Your Barters</h2>

    {/* //nav for barters// */}
    <section className="py-4 overflow-hidden ">
  <div className="container px-4 mx-auto">
    <div className="relative flex justify-center">
    <ul className="relative z-10 inline-flex flex-wrap items-center -m-5">
      <Link to="/receivedbarters"> <li className="p-5"><a className="group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-medium bg-clip-text hover:bg-gradient-to-r from-amber-500 " href=""><span className="inline-block pb-5">Recieved Barters</span>
          <div className="h-0.5 bg-transparent hover:bg-gradient-to-r from-indigo-500"></div></a></li></Link>
          <Link to="/proposedbarters">
        <li className="p-5"><a className="group relative flex-col items-center text-lg text-amber-500  hover:text-transparent font-medium bg-clip-text hover:bg-gradient-to-r from-amber-500 " href=""><span className="inline-block pb-5">Proposed Barters</span>
          <div className="h-0.5 bg-transparent hover:bg-gradient-purple-left"></div></a></li></Link>
          <Link to="/agreedbarters">
        <li className="p-5"><a className="group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-medium bg-clip-text hover:bg-gradient-to-r from-amber-500 " href=""><span className="inline-block pb-5">Agreed Barters</span>
          <div className="h-0.5 bg-transparenhover:bg-gradient-purple-left"></div></a></li></Link>
    
      </ul>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
    </div>
  </div>
</section>

{/* barters listed */}
    <div className="flex flex-wrap -m-1.5 mb-10">
      <div className="w-full p-1.5">
      {barterCard}
      </div>
    </div>
  </div>
</section><Footer/></div>
  )
}

export default BarterProposed