"use client";

import * as React from "react";
import { ChatNavigation } from "./ChatNavigation";
import { ChatInterface } from "./ChatInterface";

const Chatbot: React.FC = () => {
  return (
    <main className="overflow-hidden bg-black">
      <div className="flex relative flex-col pt-8 pr-20 pb-12 pl-1 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee84608adf5eadfa9d0dedc9be7dbb1d9deaa87f?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
          alt="Background pattern"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-wrap gap-9 self-start text-2xl text-black whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f46b84d12b5026b8ba8e909089ec180985bca8?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
            alt="Logo"
            className="object-contain shrink-0 max-w-full aspect-[1.75] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[159px]"
          />
          <ChatNavigation />
        </div>
        <div className="flex relative flex-wrap self-end mt-5 w-full max-w-[1199px] max-md:max-w-full">
          <ChatInterface />
          <footer className="text-2xl text-white mt-[763px] max-md:mt-10">
            chat with <br />
            NURO
          </footer>
        </div>
      </div>
    </main>
  );
};

export default Chatbot;
