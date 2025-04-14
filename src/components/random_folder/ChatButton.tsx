export const ChatButton: React.FC = () => {
  return (
    <button className="flex fixed right-10 bottom-10 gap-5 items-center px-10 py-5 bg-black cursor-pointer rounded-[45px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-sm:right-5 max-sm:bottom-5 max-sm:px-8 max-sm:py-4">
      <div className="relative bg-rose-200 rounded-full h-[58px] w-[62px]" />
      <div className="text-2xl text-center text-white">
        <span>chat with</span>
        <br />
        <span>NURO</span>
      </div>
    </button>
  );
};
