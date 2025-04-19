"use client";

import * as React from "react";

interface ChatMessageProps {
  message: string;
  isUser?: boolean;
  className?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser = false,
  className = "",
}) => {
  return (
    <article
      className={`px-10 py-6 text-2xl text-white bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:max-w-full ${
        isUser ? "self-start" : "self-end"
      } ${className}`}
    >
      {message}
    </article>
  );
};
