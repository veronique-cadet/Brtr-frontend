import React,{useState, useEffect} from 'react'
import NavBarTwo from './NavBarTwo'

function BarterPage({setUser, yourBarters, setYourBarters}) {

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
      BarterPage</div>
  )
}

export default BarterPage