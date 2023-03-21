import React from "react";

function ChatCard({ chat }) {
  return (
    <div className=" h-28 w-11/12 mb-6 flex  mx-auto mt-2 rounded-lg bg-slate-100 hover:shadow-xl hover:bg-slate-200 ">
      <div className="flex ml-3 mt-6">
        <img
          class="h-16 w-16 rounded-full mx-auto"
          src={chat?.chatee?.picture}
          alt="user picture"
        />
        <h1 className="text-xl text-indigo-700 ml-5 font-light">
          {chat?.chatee?.first_name}
        </h1>
      </div>
    </div>
  );
}

export default ChatCard;
