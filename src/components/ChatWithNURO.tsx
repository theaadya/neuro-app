import * as React from "react";
import { ActionButton } from "./ActionButton";

export const ChatWithNURO: React.FC = () => {
  return (
    <section className="flex flex-col mt-12 w-full text-xl max-md:mt-8 max-md:max-w-full">
      <div className="flex justify-end gap-2 mt-64 text-white ml-auto max-md:mt-8 max-md:mr-2.5 max-md:max-w-full">
        <ActionButton
          variant="black"
          className="py-2 px-4 text-lg w-[190px]"
        >
          Chat with NURO
        </ActionButton>
      </div>
    </section>
  );
};
