import React from "react";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="flex flex-wrap gap-10 w-full text-2xl text-black whitespace-nowrap max-w-[1312px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f46b84d12b5026b8ba8e909089ec180985bca8?placeholderIfAbsent=true&apiKey=9163cbaba4b9452eaa4e875c4a3cc94d"
        alt="Company Logo"
        className="object-contain shrink-0 max-w-full aspect-[1.75] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[159px]"
      />
      <NavMenu />
    </header>
  );
};

export default Header;
