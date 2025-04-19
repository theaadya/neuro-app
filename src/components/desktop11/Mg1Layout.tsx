"use client";
import * as React from "react";
import { NavigationBar } from "../NavigationBar";
import { Mg1Content } from "./Mg1Content";

export default function Mg1Layout() {
  return (
    <div className="overflow-hidden bg-black">
      <main className="flex relative flex-col pt-8 pr-20 pb-16 pl-1 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a009ffa1deac0f03c1dd3d650454a26a41ef47?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        <NavigationBar />
        <Mg1Content />
      </main>
    </div>
  );
}
