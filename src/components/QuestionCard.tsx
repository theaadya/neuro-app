import * as React from "react";
import { AnswerButton } from "./AnswerButton";

interface QuestionCardProps {
  onAnswerSelect?: (answer: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  onAnswerSelect,
}) => {
  return (
    <section className="flex flex-col items-center px-7 pt-8 pb-16 bg-red-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
      <h2 className="text-2xl text-black max-md:max-w-full">
        Cognitive Preferences & Adaptation
      </h2>
      <h3 className="self-stretch mt-2.5 text-4xl max-md:max-w-full">
        Are you sensitive to certain sensory inputs (e.g., bright lights, loud
        sounds, textures)?
      </h3>
      <p className="mt-2.5 ml-4 text-base text-black max-md:max-w-full">
        Why?
        <span style={{ color: "rgba(61,60,60,1)" }}>
          {" "}
          Enables Sensory Adaptation and Predictive Sensory Buffer features.
        </span>
      </p>
      <AnswerButton onClick={() => onAnswerSelect?.("Yes")} variant="selected">
        Yes
      </AnswerButton>
      <AnswerButton
        onClick={() => onAnswerSelect?.("No")}
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/65e6a184dfe4e655f8418a927fb8b8ab5f5ee9eb?placeholderIfAbsent=true&apiKey=e94dd7a1b832453687256e98abe20ef0"
      >
        No
      </AnswerButton>
      <AnswerButton onClick={() => onAnswerSelect?.("Prefer Not to say")}>
        Prefer Not to say
      </AnswerButton>
    </section>
  );
};
