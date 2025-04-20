"use client";
import { SignUpForm } from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { login, isAuthenticated } from "../auth";
import { useEffect } from "react";

export default function SignUpPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/personalizationCard"); // Redirect to PersonalizationCard if already authenticated
    }
  }, []);

  const handleSignup = () => {
    login(); // Simulate login logic
    navigate("/personalizationCard"); // Navigate to PersonalizationCard after signing up
  };

  return (
    <main className="overflow-hidden text-3xl text-center bg-black">
      <div className="flex relative flex-col items-center px-20 pt-14 pb-28 w-full rounded-none min-h-[1024px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ca341ce415189a9df5af718d9f0232504132f9?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center mb-0 max-w-full w-[828px] max-md:mb-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09a348b67f7406fe87368654cd4196e6bae44f92?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
            alt="Logo"
            className="object-contain z-10 max-w-full aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[277px]"
          />
          <SignUpForm />
          <button
            className="px-16 py-4 mt-8 max-w-full text-white whitespace-nowrap bg-red-400 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[241px] max-md:px-5"
            onClick={handleSignup}
          >
            SignUp
          </button>
          <p className="mt-7 text-xl text-black">
            Already a user?{" "}
            <button
              className="underline"
              onClick={() => navigate("/login")} // Navigate to login page
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
