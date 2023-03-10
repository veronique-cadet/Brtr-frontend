import './App.css';
import { Route, Routes } from "react-router-dom";
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
import EditProfile from './Components/EditProfile';
import YourSkills from './Components/YourSkills';
import Calendar from './Components/Calendar';
import CalendarAgreed from './Components/CalendarAgreed'
import CalendarScheduled from './Components/CalendarScheduled'
import CalendarCreate from './Components/CalendarCreate'
import CalendarComplete from './Components/CalendarComplete';


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
        <Route path="/messages" element={<Messages setUser={setUser} user={user}/>} />
        <Route path="/login" element={<LogIn user={user} setUser={setUser}/>} />
        <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
        <Route path="/receivedbarters" element={<BarterReceived user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/userprofile" element={<UserProfiles user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/yourprofile" element={<YourProfile user={user} setUser={setUser}/>} />
        <Route path="/skillsearchlist" element={<ListofUsers setUser={setUser} user={user}/>} />
        <Route path="/agreedbarters" element={<BarterAgreed user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/proposedbarters" element={<BarterProposed user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/editprofile" element={<EditProfile user={user} setUser={setUser}/>} />
        <Route path="/yourskills" element={<YourSkills user={user} setUser={setUser}/>} />
        <Route path="/calendar" element={<Calendar user={user} setUser={setUser}/>} />
        <Route path="/calendarscheduling" element={<CalendarCreate user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/calendaragreedbarters" element={<CalendarAgreed user={user} setUser={setUser} yourBarters={yourBarters} setYourBarters={setYourBarters}/>} />
        <Route path="/calendarscheduledbarters" element={<CalendarScheduled user={user} setUser={setUser}/>} />
        <Route path="/complete" element={<CalendarComplete user={user} setUser={setUser}/>} />
      </Routes>
      
    </div>
  );
}

export default App;