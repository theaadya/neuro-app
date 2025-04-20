"use client";
import * as React from "react";

const ChatButton: React.FC = () => {
  const handleChatClick = () => {
    // Handle chat button click
    console.log("Chat with NURO clicked");
  };

  return (
    <button
      onClick={handleChatClick}
      className="self-end px-16 pt-4 pb-1.5 mt-14 mr-10 max-w-full text-2xl text-white bg-black rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[309px] max-md:px-5 max-md:mt-10 max-md:mr-2.5"
      aria-label="Chat with NURO"
    >
      chat with <br />
      NURO
    </button>
  );
};

export default ChatButton;
