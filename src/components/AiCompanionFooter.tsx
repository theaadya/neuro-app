import React from "react";

const AiCompanionFooter = () => {
  return (
    <footer className="flex flex-col items-end self-stretch px-16 pt-7 pb-2.5 w-full text-white bg-stone-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 w-full max-w-[1009px] max-md:max-w-full">
        <h2 className="grow shrink self-start text-4xl w-[757px] max-md:max-w-full">
          Talk to NURO - Your Empathic AI companion
        </h2>
        <button className="text-2xl">
          chat with <br />
          NURO
        </button>
      </div>
    </footer>
  );
};

export default AiCompanionFooter;
