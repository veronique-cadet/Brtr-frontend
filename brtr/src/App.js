import './App.css';
import { Route, Routes, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './Components/Home';
import Browse from './Components/Browse';
import Messages from './Messages';
import SignUp  from "./Components/SignUp";
import LogIn from "./Components/LogIn.jsx"


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    const getUser = async () => {
      let req = await fetch("/me");
      let res = await req.json()
      console.log('res', res)
      setUser(res)
     }
     getUser()
  }, []);

  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse user={user} setUser={setUser} />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<LogIn user={user} setUser={setUser}/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
