import * as React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { isAuthenticated, logout } from "../auth";

export const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  const handleAuthClick = () => {
    if (loggedIn) {
      logout();
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  const linkBase = "my-auto px-4 py-1 rounded-2xl";
  const activeStyle = "bg-white bg-opacity-50";

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
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/taskmanage"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : ""}`
          }
        >
          Task
        </NavLink>

        <NavLink
          to="/manage"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : ""}`
          }
        >
          Manage
        </NavLink>

        <NavLink
          to="/insight"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : ""}`
          }
        >
          Insight
        </NavLink>

        <span
          className="my-auto cursor-pointer hover:text-red-500"
          onClick={handleAuthClick}
        >
          {loggedIn ? "Logout" : "Login"}
        </span>
      </div>
    </nav>
  );
};
