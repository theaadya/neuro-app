export const ChatSection = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between text-2xl text-white max-md:mr-2.5 max-md:max-w-full">
      <div className="flex shrink-0 max-w-full bg-red-400 h-[311px] rounded-[30px] w-[518px]" />
      <button className="self-end px-16 pt-4 pb-1.5 mt-48 bg-black rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
        chat with <br />
        NURO
      </button>
    </div>
  );
};
