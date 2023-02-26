import './App.css';
import { Route, Routes, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './Components/Home';
import Browse from './Components/Browse';
import Messages from './Components/Messages';
import SignUp  from "./Components/SignUp";
import LogIn from "./Components/LogIn.jsx"
import UserProfiles from './Components/UserProfiles';
import BarterPage from './Components/BarterPage';



function App() {

  const [user, setUser] = useState(null);

 
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
        <Route path="/barters" element={<BarterPage setUser={setUser}/>} />
        <Route path="/yourprofile" element={<UserProfiles setUser={setUser}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
