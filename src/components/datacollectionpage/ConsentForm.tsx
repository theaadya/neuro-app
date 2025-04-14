"use client";

import * as React from "react";
import { Button } from "./Button";

interface ConsentFormProps {
  onConsent?: (consent: boolean) => void;
}

export const ConsentForm: React.FC<ConsentFormProps> = ({ onConsent }) => {
  return (
    <section className="flex flex-col items-center px-20 pt-8 pb-32 bg-red-400 rounded-[30px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[736px] max-md:mb-2.5">
        <h2 className="self-center text-2xl text-black">
          Data & Privacy Consent
        </h2>
        <h1 className="mt-8 mr-3 ml-3 text-4xl max-md:mr-2.5 max-md:max-w-full">
          Do you consent to the collection and use of your data?
        </h1>
        <p className="self-center ml-3 text-base text-black max-md:max-w-full">
          Why?
          <span className="text-[#3d3c3c]">
            {" "}
            All the data is used for personalization and it is used for
            improving model.{" "}
          </span>
          <br />
          <span className="text-[#3d3c3c]">
            Legal compliance and user transparency
          </span>
        </p>
        <Button
          onClick={() => onConsent?.(true)}
          variant="primary"
          className="mt-9"
          fullWidth
        >
          Yes
        </Button>
        <Button
          onClick={() => onConsent?.(false)}
          variant="image"
          className="mt-14 max-md:mt-10"
          fullWidth
        >
          No
        </Button>
      </div>
    </section>
  );
};
