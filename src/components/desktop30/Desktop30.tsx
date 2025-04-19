"use client";
import * as React from "react";
import { NavigationBar } from "../NavigationBar";
import { CommunityHeader } from "./CommunityHeader";
import { ContentSection } from "./ContentSection";

const Desktop30: React.FC = () => {
  return (
    <main className="overflow-hidden bg-black">
      <div className="flex relative flex-col pt-8 pr-11 pl-1 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28e1c423aef9a242171966f09386f158ce4362ef?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        <NavigationBar />
        <div className="relative self-end mt-20 w-full max-w-[1293px] max-md:mt-10 max-md:max-w-full">
          <CommunityHeader />
          <ContentSection />
        </div>
      </div>
    </main>
  );
};

export default Desktop30;
