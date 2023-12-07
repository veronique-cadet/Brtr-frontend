import React, { useState, useEffect } from "react";
import NavBarTwo from "./NavBarTwo";
import Footer from "./Footer";
import dayjs from "dayjs";


function Messages({ user, setUser }) {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState({});
  const [message, setMessage] = useState("");
  const ws = new WebSocket("ws://localhost:3000/cable");

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected to websocket server");
      // Subscribe to a specific chat channel based on user or chat ID
      ws.send(JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          channel: "MessagesChannel",
          // Add any necessary identifiers for the channel
        }),
      }));
    };

    ws.onmessage = (e) => {
      const response = JSON.parse(e.data);
      if (response.type === "ping" || response.type === "welcome" || response.type === "confirm_subscription") {
        return;
      }
      if (response.message) {
        setMessages(prevMessages => [...prevMessages, response.message]);
      }
    };

    
    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    // Fetch existing chats and messages
    fetch("/chats")
      .then(res => res.json())
      .then(data => {
        setChats(data);
        // Select the first chat by default or based on some criteria
        setSelectedChat(data[0]);
      });
  }, []);

  const handleClick = (chatId) => {
    // Fetch messages for a specific chat when clicked
    fetch(`/chats/${chatId}`)
      .then(response => response.json())
      .then(data => {
        setSelectedChat(data);
        setMessages(data.messages);
      })
      .catch(error => console.error('Error retrieving messages:', error));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send a new message
    const newMessage = {
      message: message,
      messanger_id: user.id,
      messangee_id: selectedChat.id, // Adjust based on your chat model
      chat_id: selectedChat.id,
    };
  
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the chat list to show the most recent chat at the top
        fetch("/chats")
          .then((res) => res.json())
          .then((chatData) => {
            setChats(chatData);
  
            // Find the chat that corresponds to the sent message
            const updatedChat = chatData.find((chat) => chat.id === selectedChat.id);
  
            if (updatedChat) {
              setSelectedChat(updatedChat);
            }
          });
  
        setMessages([...messages, data]);
        setMessage("");
      })
      .catch((error) => console.error("Error sending message:", error));
  };
  


  useEffect(() => {
    // Fetch existing chats and messages
    fetch("/chats")
      .then((res) => res.json())
      .then((data) => {
        setChats(data);
  
        // Sort chats by the most recent message date
        const sortedChats = data.sort((a, b) => {
          const lastMessageA = a.messages[a.messages.length - 1]?.created_at;
          const lastMessageB = b.messages[b.messages.length - 1]?.created_at;
          if (lastMessageA && lastMessageB) {
            return new Date(lastMessageB) - new Date(lastMessageA);
          }
          if (lastMessageA) {
            return -1;
          }
          if (lastMessageB) {
            return 1;
          }
          return 0;
        });
  
        // Select the most recent chat
        const mostRecentChat = sortedChats[0];
        setSelectedChat(mostRecentChat);
  
        // Fetch messages for the selected chat
        fetch(`/chats/${mostRecentChat.id}`)
          .then((response) => response.json())
          .then((data) => {
            setSelectedChat(data);
            setMessages(data.messages);
          })
          .catch((error) => console.error('Error retrieving messages:', error));
      });
  }, []);
  

  const filteredChat = chats.filter((chat) => {
    if (user.id === chat.chatee_id || user.id === chat.chater_id) {
      return true;
    }
    return false;
  });

  // const [selectedChat, setSelectedChat] = useState({});

  // const handleClick = (id) => {
  //   fetch(`/chats/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMessages(data);
  //       setSelectedChat(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error retrieving messages:", error);
  //     });
  // };

  const sortedChat = filteredChat.sort((a, b) => {
    const lastMessageA = a.messages[a.messages.length - 1]?.created_at;
    const lastMessageB = b.messages[b.messages.length - 1]?.created_at;

    if (lastMessageA && lastMessageB) {
      return new Date(lastMessageB) - new Date(lastMessageA);
    }
    if (lastMessageA) {
      return -1;
    }
    if (lastMessageB) {
      return 1;
    }
    return 0;
  });

  const chatList = sortedChat.map((chat) => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    const lastMessageContent = lastMessage
      ? lastMessage.message
      : "No messages yet";
    const lastMessageDate = lastMessage
      ? dayjs(lastMessage.created_at).format("MMM-DD h:mm A")
      : "";
    // const senderName = lastMessage.messanger?.user?.first_name
    console.log(lastMessage);
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
            <h1 className="text-xl text-indigo-700 ml-5 font-light">
              {chat?.chatee?.first_name}
            </h1>
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

  // const [message, setMessage] = useState("");

 

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
              {messages.map((m) => (
              <div className="max-h-96" key={m?.id}>
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
            ))}
            </div>
            <div className="">
              <form
               className="flex justify-center mt-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
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
