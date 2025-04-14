import * as React from "react";
import { Button } from "./Button";

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between self-center mt-10 max-w-full text-3xl whitespace-nowrap w-[453px]">
      <Button>Next</Button>
      <Button>Skip</Button>
    </div>
  );
};
