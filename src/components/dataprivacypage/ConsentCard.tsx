import * as React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const ConsentCard: React.FC = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    console.log("Yes clicked");
    // navigate("/home"); 
  };

  const handleNo = () => {
    console.log("No clicked");
    // navigate("/home"); 
  };

  return (
    <article className="flex flex-col items-center px-10 pt-8 pb-32 bg-red-400 rounded-[30px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <h2 className="text-2xl text-black">Data & Privacy Consent</h2>
      <h3 className="self-stretch mt-4 text-4xl max-md:max-w-full">
        Are you comfortable with anonymized data being shared for research or
        improvement of the platform?
      </h3>
      <p className="mt-4 ml-3 text-base text-black max-md:max-w-full">
        Why?
        <span className="text-[#3d3c3c]">
          {" "}Our app uses multiple AI models which use user data for training the
          model. Therefore,{" "}
        </span>
        <br />
        <span className="text-[#3d3c3c]">
          your data will be shared with third parties.
        </span>
      </p>
      <Button
        onClick={handleYes}
        className="w-[736px] mt-9 max-w-full max-md:px-5 "
      >
        Yes
      </Button>
        <Button
    variant="secondary"
    onClick={handleNo}
    className="w-[736px] mt-14 mb-0 min-h-[93px] max-md:px-5 max-md:mt-10 max-md:mb-2.5 text-white"
  >
    No
  </Button>

    </article>
  );
};
