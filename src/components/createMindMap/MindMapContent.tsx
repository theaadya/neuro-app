"use client";
import * as React from "react";

export const MindMapContent: React.FC = () => {
  return (
    <main className="mt-9 max-md:max-w-full" >
      <div className="flex gap-5 max-md:flex-col">
        <section className="w-9/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center px-6 py-14 w-full bg-red-400 rounded-[30px] max-md:px-5 max-md:mt-8 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/61020cc6481292f27de4f206d8ad77e6ef03cc6e?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
              alt="Mind Map"
              className="object-contain w-full aspect-[1.78] max-md:max-w-full"
            />
          </div>
        </section>
        <aside className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <button className="grow px-16 pt-4 pb-1.5 w-full text-2xl text-white bg-black mt-[515px] rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
            chat with <br />
            NURO
          </button>
        </aside>
      </div>
    </main>
  );
};
