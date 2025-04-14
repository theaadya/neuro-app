"use client";
import * as React from "react";
import { ConsentCard } from "./ConsentCard";
import { ActionButtons } from "./ActionButtons";

export const DataPrivacyConsent1: React.FC = () => {
  return (
    <main className="overflow-hidden text-center text-white bg-black">
      <div className="flex relative flex-col pr-20 pb-10 w-full rounded-none min-h-[1024px] max-md:pr-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a51b5b40da66c79a97676e6854f7c7687abe0ac9?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8d870f3ad5be67902c2e7e03e44cd28cdae25?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          className="object-contain max-w-full aspect-[1.74] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[204px]"
          alt="Logo"
        />
        <section className="flex relative flex-col self-center mt-24 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <ConsentCard />
          <ActionButtons />
        </section>
      </div>
    </main>
  );
};

export default DataPrivacyConsent1;
