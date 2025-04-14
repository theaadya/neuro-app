"use client";
import * as React from "react";
import { NavBar } from "./NavBar";
import { CapacityIndicator } from "./CapacityIndicator";
import { MeetingSection } from "./MeetingSection";
import { ActionButtons } from "./ActionButtons";
import { ChatSection } from "./ChatSection";

export default function Dashboard() {
  return (
    <main className="overflow-hidden bg-black">
      <div className="flex relative flex-col pt-1.5 pb-11 w-full rounded-none min-h-[1024px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bed28e25df2e3f5db9013a4a82fc79de2de5037?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative w-full max-w-[1307px] max-md:max-w-full">
          <NavBar />
        </div>
        <section className="relative px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
            <h1 className="self-end mt-10 text-2xl text-black">
              UPCOMING MEETINGS
            </h1>
            <CapacityIndicator percentage={70} />
          </div>
          <div className="mt-3.5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <MeetingSection />
              <ActionButtons />
            </div>
          </div>
          <ChatSection />
        </section>
      </div>
    </main>
  );
}
