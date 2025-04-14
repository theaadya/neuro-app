import { Navigation } from "./Navigation";

export const Header: React.FC = () => {
  return (
    <header className="flex gap-5 items-center px-10 py-5 max-sm:flex-col max-sm:p-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d659dad94a359b49ae4fd338c10ff2d967c7c31f"
        className="object-contain h-[91px] w-[159px]"
        alt="Logo"
      />
      <div className="grow p-2 bg-rose-300 bg-opacity-50 rounded-[36.5px] max-sm:w-full">
        <Navigation />
      </div>
    </header>
  );
};
