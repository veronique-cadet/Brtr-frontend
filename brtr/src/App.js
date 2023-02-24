import './App.css';
import { Route, Routes, useResolvedPath } from "react-router-dom";
import Home from './Components/Home';
import Browse from './Components/Browse';
import Messages from './Messages';
import SignUp  from "./Components/SignUp";
import LogIn from "./Components/LogIn.jsx"


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
