export const NavBar = () => {
  return (
    <nav className="flex gap-5 max-md:flex-col">
      <div className="w-[16%] max-md:ml-0 max-md:w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8d870f3ad5be67902c2e7e03e44cd28cdae25?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Logo"
          className="object-contain grow shrink-0 max-w-full aspect-[1.74] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[204px] max-md:mt-6"
        />
      </div>
      <div className="ml-5 w-[84%] max-md:ml-0 max-md:w-full">
        <div className="flex relative flex-wrap gap-5 justify-between px-20 py-2 mx-auto mt-11 w-full text-2xl text-black whitespace-nowrap bg-rose-300 bg-opacity-50 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 items-center text-center max-md:max-w-full">
            <button className="self-stretch my-auto">About</button>
            <button className="self-stretch my-auto">Task</button>
            <button className="self-stretch px-8 py-5 bg-white bg-opacity-50 rounded-[40px] max-md:px-5">
              Manage
            </button>
          </div>
          <div className="flex gap-10 my-auto">
            <button className="text-center">Insight</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
