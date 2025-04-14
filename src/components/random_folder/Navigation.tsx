export const Navigation: React.FC = () => {
  const menuItems = ["About", "Task", "Manage", "Insight", "Login"];

  return (
    <nav className="flex gap-8 items-center px-10 py-0 max-md:gap-4 max-md:px-5 max-md:py-0 max-sm:hidden">
      {menuItems.map((item) => (
        <button
          key={item}
          className="px-5 py-2.5 text-2xl text-black cursor-pointer max-md:px-4 max-md:py-2 max-md:text-xl"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};
