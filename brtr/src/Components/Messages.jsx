import React, { useState, useEffect } from "react";
import NavBarTwo from "./NavBarTwo";
import Footer from "./Footer";

const ws = new WebSocket("ws://localhost:3000/cable");

function Messages({ setUser, user }) {
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

    const message = data.message;
    setMessages([...messages, message]);
  };

  const fetchMessages = async () => {
    const response = await fetch("/messages");
    const data = await response.json();
    setMessages(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const [message, setMessage] = useState("");

  const newMessage = {
    message: message,
    messanger_id: 1,
    messangee_id: 1,
  };

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
        setMessages([...messages, newMessage]);
        console.log(newMessage);
      });
  };

  return (
    <div>
      <NavBarTwo setUser={setUser} />
      <h1 className="mb- text-6xl md:text-7xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none mt-5 text-indigo-700">
        Still Working On
      </h1>
      <div className="flex justify-center mt-5 mb-24 ">
        <img src="./giphy.gif" />
        <div className="bg-slate-100 px-10 py-5 w-2/6  over-scroll h-5/6 rounded-xl mt-24">
          <div className="max-h-96">
            <h1 className="text-center text-indigo-700 font-bold">Messages</h1>
            <p className="text-center text-indigo-700">Guid: {guid}</p>
          </div>
          <div className="bg-white py-2 px-2 mt-2 mb-5 rounded-xl h-96">
            {messages.map((m) => (
              <div className="max-h-96 " key={m?.id}>
                <p className="text-indigo-700">{m?.messanger?.first_name}</p>
                <p className="ml-5">{m?.message}</p>
              </div>
            ))}
          </div>
          <div className=" flex justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                setMessage("");
                fetchMessages();
              }}
            >
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-96 h-10 border-2 "
                type="text"
                name="message"
              />
              <button
                className="ml-5 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Messages;
