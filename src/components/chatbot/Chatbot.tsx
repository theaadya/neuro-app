"use client";

import * as React from "react";
import { NavigationBar } from "../NavigationBar";
import { ChatInterface } from "./ChatInterface";

const Chatbot: React.FC = () => {
  return (
      <div className="flex relative flex-col pt-8 pr-20 pb-12 pl-1 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee84608adf5eadfa9d0dedc9be7dbb1d9deaa87f?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
          alt="Background pattern"
          className="object-cover absolute inset-0 size-full"
        />
        <NavigationBar />
        <div className="flex justify-center relative w-full mt-5 max-md:max-w-full">
          <ChatInterface />
        </div>
      </div>
  );
};

export default Chatbot;
