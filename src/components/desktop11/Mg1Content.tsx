import * as React from "react";
import { Mg1Updates } from "./Mg1Updates";
import { Mg1Chat } from "./Mg1Chat";

export function Mg1Content() {
  return (
    <section className="relative self-center mt-20 w-full max-w-[1277px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[73%] max-md:ml-0 max-md:w-full">
          <Mg1Updates />
        </div>
        <div className="ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <Mg1Chat />
        </div>
      </div>
    </section>
  );
}
