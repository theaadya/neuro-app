import * as React from "react";

const NavigationBar: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-9 self-start text-2xl text-black whitespace-nowrap">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f46b84d12b5026b8ba8e909089ec180985bca8?placeholderIfAbsent=true&apiKey=9163cbaba4b9452eaa4e875c4a3cc94d"
        alt="Company Logo"
        className="object-contain shrink-0 max-w-full aspect-[1.75] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[159px]"
      />
      <nav className="flex flex-wrap flex-auto gap-10 px-20 py-2 my-auto bg-rose-300 bg-opacity-50 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <ul className="flex gap-10 items-center text-center max-md:max-w-full">
          <li className="self-stretch my-auto">
            <a href="#about">About</a>
          </li>
          <li className="self-stretch my-auto">
            <a href="#task">Task</a>
          </li>
          <li className="self-stretch my-auto">
            <a href="#manage">Manage</a>
          </li>
          <li className="self-stretch">
            <a
              href="#insight"
              className="block px-10 py-4 bg-white bg-opacity-50 rounded-[40px] max-md:px-5"
            >
              Insight
            </a>
          </li>
        </ul>
        <div className="my-auto">
          <a href="#login">Login</a>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
