import React, { useState, useEffect } from "react";
import NavBarTwo from "./NavBarTwo";

const ws = new WebSocket("ws://localhost:3000/cable");

function Messages({ setUser }) {
  const [messages, setMessages] = useState([]);
  const [guid, setGuid] = useState("");

  ws.onopen = () => {
    console.log("Connected to websocket server");
    setGuid(Math.random().toString(36).substring(2, 15));

    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          id: guid,
          channel: "MessagesChannel",
        }),
      })
    );
  };

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.type === "ping") return;
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;

    let m = data.post;
    setMessages([...messages, m])
  };


    const fetchMessages = async () => {
    const response = await fetch("/messages");
    const data = await response.json();
    setMessages(data);
    console.log(data)
  };
  

  useEffect(() => {
    fetchMessages();
  }, []);



const [message, setMessage] = useState("")

  const newMessage ={
    message: message,
    messanger_id: 1,
    messangee_id: 1
  }
  
  const handleSubmit = () => {
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((response) => response.json())
      .then(() => {
        setMessages([...messages, newMessage]) ;
        console.log(newMessage)
      });
  };

  

  return (
    <div>
      <NavBarTwo setUser={setUser} />

      <div className="App">
        <div className="messageHeader">
          <h1>Messages</h1>
          <p>Guid: {guid}</p>
        </div>
        <div className="mb-20" id="messages">
          {messages.map((m) => (
            <div className="message" key={m?.id}>
              <p>{m?.message}</p>
            </div>
          ))}
        </div>
        <div className="messageForm">
          <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()
            setMessage("")
            fetchMessages()
            }}>
            <input value ={message} onChange={(e)=> setMessage(e.target.value)}className="w-96 h-20 border-2 " type="text" name="message" />
            <button
             
              className="messageButton"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Messages;
