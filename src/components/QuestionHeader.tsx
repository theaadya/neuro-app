import React from "react";

export const QuestionHeader = () => {
  return (
    <>
      <h2 className="self-center text-2xl text-black max-md:max-w-full">
        Cognitive Preferences & Adaptation
      </h2>
      <h1 className="self-center mt-2.5 text-4xl max-md:max-w-full">
        What are your main triggers?
        <br />
        (Check all that apply)
      </h1>
      <p className="self-center mt-2.5 ml-4 text-base text-black max-md:max-w-full">
        Why?
        <span className="text-[#3d3c3c]">
          {" "}
          Enables Sensory Adaptation and Predictive Sensory Buffer features.
        </span>
      </p>
    </>
  );
};
