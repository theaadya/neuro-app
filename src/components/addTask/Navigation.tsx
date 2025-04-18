export const Navigation = () => {
  return (
    <nav className="flex flex-wrap gap-10 w-full text-2xl text-black whitespace-nowrap max-w-[1312px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f46b84d12b5026b8ba8e909089ec180985bca8?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
        alt="Logo"
        className="object-contain shrink-0 max-w-full aspect-[1.75] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[159px]"
      />
      <div className="flex flex-wrap flex-auto gap-10 self-start px-20 py-2 mt-5 bg-rose-300 bg-opacity-50 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 text-center">
          <span className="my-auto">About</span>
          <span className="px-12 py-5 bg-white bg-opacity-50 rounded-[40px] max-md:px-5">
            Task
          </span>
        </div>
        <div className="flex gap-10 items-center my-auto max-md:max-w-full">
          <span className="self-stretch my-auto text-center">Manage</span>
          <span className="self-stretch my-auto text-center">Insight</span>
          <span className="self-stretch">Login</span>
        </div>
      </div>
    </nav>
  );
};
