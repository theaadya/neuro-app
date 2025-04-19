"use client";

import * as React from "react";
import { ChatMessage } from "./ChatMessage";

export const ChatInterface: React.FC = () => {
  return (
    <section className="grow shrink-0 pt-6 pb-10 bg-red-400 basis-0 rounded-[30px] w-fit max-md:max-w-full">
      <div className="flex flex-col items-start px-10 text-black max-md:px-5 max-md:max-w-full">
        <h1 className="text-5xl max-md:max-w-full max-md:text-4xl">
          Start your conversation with Nuro.
        </h1>
        <p className="mt-4 ml-3 text-base max-md:max-w-full">
          With Nuro, you can enjoy smart, friendly, and convenient communication
          anytime, anywhere.
        </p>
        <ChatMessage
          message="Hello, How are you feeling today? Ask me anything!"
          className="self-end px-7 py-12 mt-7 text-2xl"
        />
      </div>
      <div className="flex flex-col px-10 mt-12 text-2xl text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <ChatMessage
          message="I want to prepare for my meeting. Could you summarise my points?"
          isUser
          className="w-[678px]"
        />
        <ChatMessage
          message={`Sure. Last time, you were less certain—this time, aim for clear, direct points. Example: "I recommend X because…" instead of "I think we could consider X."\nProgress updates, blockers, decision-making, team coordination, next steps.\nSpeak with certainty, take a breath before responding, and keep points concise.`}
          className="mt-8 w-[678px]"
        />
      </div>
    </section>
  );
};
