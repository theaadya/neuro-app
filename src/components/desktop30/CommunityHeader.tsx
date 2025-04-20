import * as React from "react";

export const CommunityHeader: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
      <h1 className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
        Become a Part of Social Community
      </h1>
      <p className="self-end mt-6 text-2xl text-white">70%</p>
    </header>
  );
};
