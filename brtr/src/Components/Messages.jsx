import React, { useState, useEffect } from "react";
import NavBarTwo from "./NavBarTwo";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import ChatCard from "./ChatCard";
import { flushSync } from "react-dom";

const ws = new WebSocket("ws://localhost:3000/cable");

function Messages({ setUser, user }) {
  // const skill = useLocation();
  // const { from } = skill.state?.from;
  // const id = skill.state?.from.id;
  // console.log(id);

  // const [userProfile, setUserProfile] = useState({});

  // useEffect(() => {
  //   fetch(`/user_skills/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserProfile(data);
  //       console.log(data);
  //     });
  // }, []);

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
    messanger_id: user?.id,
    messangee_id: 2,
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

  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetch("/chats")
      .then((res) => res.json())
      .then((data) => {
        setChats(data);
        console.log(data);
      });
  }, []);

  const filteredChat = chats.filter((chat) => {
    if (user.id === chat.chatee_id || user.id === chat.chater_id) {
      return true;
    }
    return false;
  });

  const chatList = filteredChat.map((chat) => {
    return <ChatCard chat={chat} key={chat.id} id={chat.id} />;
  });

  return (
    <div className="h-screen ">
      <NavBarTwo setUser={setUser} />
      <section className="pt-1 pb-10 h-screen container p-5 mx-auto my-10 ">
        {/* <div className="container px-4 mx-auto">
          <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">
            {user?.first_name} {user?.last_name}
          </p>
        </div>  */}

        <div className="flex mt-5  w-full h-full  border-2 border-slate-200 rounded-tl-3xl rounded-tr-3xl">
          <div className="bg-white w-2/6  border-r-2 border-slate-200 rounded-tl-3xl mt-5">
            <div className=" border-b-2  h-15 w-full border-slate-200  ">
              <h1 className="  text-2xl text-center font-light text-indigo-700 w-full ">
                Messages
              </h1>
            </div>
            {chatList}
          </div>
          <div className="bg-white  pb-5 w-full   rounded-tr-3xl mt-5 ">
            <div className="border-b-2  h-15 w-full border-slate-200 rounded-tr-3xl ">
              <h1 className="text-center text-indigo-700 font-bold">
                Messages
              </h1>
              <p className="text-center text-indigo-700">Guid: {guid}</p>
            </div>
            <div className=" py-10 px-64  h-5/6 overflow-scroll">
              {messages.map((m) => (
                <div className="max-h-96 " key={m?.id}>
                  <div className="flex mb-7">
                    <img
                      className="h-13 w-13 rounded-full"
                      src={m?.messanger?.picture}
                    />
                    <div>
                      <div className="flex items-center ">
                        <p className="text-indigo-700 font-bold text-xl ml-5">
                          {m?.messanger?.first_name}
                        </p>
                        <p className=" text-sm ml-2 text-slate-700">
                          {dayjs(m?.created_at).format("MMM-DD h:mm A")}
                        </p>
                      </div>
                      <p className="ml-5">{m?.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <form
                className="flex justify-center "
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  fetchMessages();
                }}
              >
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className=" w-4/6 h-13 border-2  "
                  type="text"
                  name="message"
                />
                <button
                  className="ml-3 inline-block px-6  leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Messages;
