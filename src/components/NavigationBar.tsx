import * as React from "react";

export const NavigationBar: React.FC = () => {
  return (
    <nav className="relative flex justify-center items-center w-full py-2 text-xl text-black">
      {/* Logo (Left-Aligned) */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f46b84d12b5026b8ba8e909089ec180985bca8?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
        alt="Logo"
        className="absolute left-10 w-32 object-contain" 
      />

      {/* Centered Navigation Items */}
      <div className="flex items-center gap-6 bg-rose-300 bg-opacity-50 px-8 py-2 rounded-full shadow-md max-md:px-4 max-md:flex-wrap">
        <a href="#" className="my-auto">About</a>
        <a href="#" className="px-4 py-1 bg-white bg-opacity-50 rounded-2xl">Task</a>
        <a href="#" className="my-auto">Manage</a>
        <a href="#" className="my-auto">Insight</a>
        <a href="#" className="my-auto">Login</a>
      </div>
    </nav>
  );
};
