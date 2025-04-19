import * as React from "react";

interface UserPostProps {
  imageSrc: string;
  imageAspect: string;
  columnWidth: string;
}

export const UserPost: React.FC<UserPostProps> = ({
  imageSrc,
  imageAspect,
  columnWidth,
}) => {
  return (
    <div className={`${columnWidth} max-md:ml-0 max-md:w-full`}>
      <img
        src={imageSrc}
        className={`object-contain grow w-full aspect-[${imageAspect}] max-md:mt-10 max-md:max-w-full`}
        alt="User post content"
      />
    </div>
  );
};
