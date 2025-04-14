"use client";

import * as React from "react";
import { TextInput } from "./TextInput";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, password);
      }}
      className="flex flex-col self-stretch px-12 pt-7 pb-24 bg-red-400 bg-opacity-80 rounded-[100px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-stone-50 max-md:px-5 max-md:max-w-full"
    >
      <h2 className="self-center text-3xl text-white">Login</h2>
      <div className="mt-10 max-md:mt-10 max-md:max-w-full">
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
      </div>
      <div className="mt-11 max-md:mt-10 max-md:max-w-full">
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
      </div>
    </form>
  );
};
