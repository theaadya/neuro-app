"use client";

import { LoginForm } from "./LoginForm";
import { LoginButton } from "./LoginButton";
import { useNavigate } from "react-router-dom";
import { login, isAuthenticated } from "../auth";
import { useEffect } from "react";

function LoginPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     navigate("/home");
  //   }
  // }, []);

  const handleLogin = () => {
    login();
    navigate("/home");
  };

  return (
    <main className="overflow-hidden text-3xl text-center bg-black">
      <div className="flex relative flex-col items-center px-20 pt-14 pb-28 w-full rounded-none min-h-[1024px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/418acdc9d541be8db229833477276ced341f2962?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center mb-0 max-w-full w-[828px] max-md:mb-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b762abf9cf1b8c08aa36100cdf849fedea1923e?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
            alt="Logo"
            className="object-contain z-10 max-w-full aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[277px]"
          />
          <LoginForm onSubmit={handleLogin} />
          <LoginButton onClick={handleLogin} className="mt-8 w-[241px]" />
          <p className="mt-7 text-xl text-black">
            Not a user?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="underline hover:text-red-500 cursor-pointer"
            >
            Sign up
          </span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
