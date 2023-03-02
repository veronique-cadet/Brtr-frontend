import './App.css';
import { Route, Routes, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './Components/Home';
import Browse from './Components/Browse';
import Messages from './Components/Messages';
import SignUp  from "./Components/SignUp";
import LogIn from "./Components/LogIn.jsx"
import UserProfiles from './Components/UserProfiles';
import BarterReceived from './Components/BarterReceived';
import BarterAgreed from './Components/BarterAgreed';
import BarterProposed from './Components/BarterProposed';
import ListofUsers from './Components/ListofUsers';
import YourProfile from './Components/YourProfile';



function App() {

  const [user, setUser] = useState(null);
  const [yourBarters, setYourBarters] = useState([])

 
  useEffect(() =>{
    fetch('/me')
    .then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user))
        }
    });
},[]);

  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse user={user} setUser={setUser} />} />
        <Route path="/messages" element={<Messages setUser={setUser}/>} />
        <Route path="/login" element={<LogIn user={user} setUser={setUser}/>} />
        <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
        <Route path="/receivedbarters" element={<BarterReceived user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/userprofile" element={<UserProfiles user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/yourprofile" element={<YourProfile setUser={setUser}/>} />
        <Route path="/skillsearchlist" element={<ListofUsers setUser={setUser} user={user}/>} />
        <Route path="/agreedbarters" element={<BarterAgreed user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/proposedbarters" element={<BarterProposed user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
