import React, { useState, useEffect } from "react";
import NavBarTwo from "./NavBarTwo";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { flushSync } from "react-dom";

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
// websocket
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

 

  const [chats, setChats] = useState([]);

 

  useEffect(() => {
    fetch("/chats")
      .then((res) => res.json())
      .then((data) => {
        setChats(data);
        console.log(data);
        
        const sortedChats = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        
        const mostRecentChat = sortedChats[0];
        setSelectedChat(mostRecentChat);
  
        fetch(`/chats/${mostRecentChat.id}`)
          .then(response => response.json())
          .then(data => {
            setSelectedChat(data);
            console.log(data);
          })
          .catch(error => {
            console.log('Error retrieving messages:', error);
          });
      });
  }, []);
  


  const filteredChat = chats.filter((chat) => {
    if (user.id === chat.chatee_id || user.id === chat.chater_id) {
      return true;
    }
    return false;
  });




  const [selectedChat, setSelectedChat] = useState({}); 

  const handleClick = (id) => {
    fetch(`/chats/${id}`)
      .then(response => response.json())
      .then(data => {
        setMessages(data)
        setSelectedChat(data)
        console.log(data)
      })
      .catch(error => {
        console.log('Error retrieving messages:', error);
      });
  }



  const chatList = filteredChat.map((chat) => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    const lastMessageContent = lastMessage ? lastMessage.message : "No messages yet";
    const lastMessageDate = lastMessage ? dayjs(lastMessage.created_at).format("MMM-DD h:mm A") : "";
    const senderName = lastMessage.messanger?.user?.first_name
    console.log(lastMessage)
    return (
      <div
        key={chat.id}
        className="h-28 max-h-28 w-11/12 min-h-28 mb-4 flex mx-auto mt-1 rounded-lg bg-slate-100 hover:shadow-xl hover:bg-slate-200"
        onClick={() => handleClick(chat.id)}
      >
        <div className="flex ml-3 mt-6">
          <img
            className="h-16 w-16 rounded-full mx-auto"
            src={chat?.chatee?.picture}
            alt="user picture"
          />
          <div>
            <h1 className="text-xl text-indigo-700 ml-5 font-light">{chat?.chatee?.first_name}</h1>
            <div className="flex">
              
              <p className="text-gray-500 text-sm ml-5">{lastMessageContent}</p>
            </div>
            <p className="text-gray-500 text-sm ml-5">{lastMessageDate}</p>
          </div>
        </div>
      </div>
    );
  });
  

  
  

   const showMessages = selectedChat?.messages?.map((m) => (
    <div className="max-h-96  " key={m?.id}>
      <div className="flex mb-7">
        <img className="h-13 w-13 rounded-full" src={m?.messanger?.picture} />
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
  ));

  const [message, setMessage] = useState("");

  const newMessage = {
    message: message,
    messanger_id: user?.id,
    messangee_id:  user?.id === selectedChat?.chater_id 
    ? selectedChat?.chatee_id 
    : selectedChat?.chater_id,
    chat_id: selectedChat?.id
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
    .then((data) => {
      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, data],
      });
      setMessage("");
      console.log(newMessage);
  
      fetch("/chats")
        .then((res) => res.json())
        .then((data) => {
          setChats(data);
          console.log(data);
        })
    });
  };
  



  return (
    <div className="h-screen ">
      <NavBarTwo setUser={setUser} />
      <section className="pt-1 pb-10 h-screen container p-5 mx-auto mb-10 ">
        {/* <div className="container px-4 mx-auto">
          <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">
            {user?.first_name} {user?.last_name}
          </p>
        </div>  */}

        <div className="flex mt-5  w-full h-full  border-2 border-slate-200 ">
          <div className="bg-white w-2/6  border-r-2 border-slate-200 rounded-tl-3xl pt-5 ">
            <div className=" flex  justify-center items-center border-b-2  h-15 w-full border-slate-200 bg-slat pb-5">
              <h1 className="  text-2xl font-light text-slate-700  ">
                Messages
              </h1>
              <img className=" h-12 w-12 " src="./messages.png" />
            </div>
            {chatList}
          </div>
          <div className="bg-white  pb-5 w-full   rounded-tr-3xl mt-5 ">
            <div className="border-b-2  h-15 w-full border-slate-200 rounded-tr-3xl ">
              <h1 className="text-2xl font-light text-slate-700 text-center">
                Message
              </h1>

              {/* <p className="text-center text-indigo-700">Guid: {guid}</p> */}
            </div>
            <div className=" py-10 px-64  h-5/6 overflow-scroll">
              {showMessages}
            </div>
            <div className="">
              <form
                className="flex justify-center mt-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
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
                  className="ml-3 inline-block px-6  leading-none text-white rounded shadow bg-indigo-500 hover:bg-amber-500 hover:-translate-y-1"
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
