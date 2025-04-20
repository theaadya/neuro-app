import * as React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const ActionButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-5 justify-between self-center mt-10 max-w-full text-3xl whitespace-nowrap w-[453px]">
      <Button
        onClick={() => navigate("/home")}
        className="transition duration-150 ease-in-out hover:brightness-75"
      >
        Next
      </Button>
      <Button
        onClick={() => navigate("/home")}
        className="transition duration-150 ease-in-out hover:brightness-75"
      >
        Skip
      </Button>
    </div>
  );
};
