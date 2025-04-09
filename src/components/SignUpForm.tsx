"use client";
import * as React from "react";
import { FormInput } from "./FormInput";

export function SignUpForm() {
  return (
    <form className="flex flex-col self-stretch px-12 pt-7 pb-24 bg-red-400 bg-opacity-80 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-stone-50 max-md:px-5 max-md:max-w-full">
      <h1 className="self-center text-white">Sign Up</h1>
      <FormInput placeholder="Email" type="email" className="mt-10" />
      <FormInput
        placeholder="Create Password"
        type="password"
        className="mt-11 max-md:mt-10"
      />
    </form>
  );
}
