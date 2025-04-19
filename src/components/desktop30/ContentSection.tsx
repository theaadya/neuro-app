"use client";
import * as React from "react";
import { UserPost } from "./UserPost";

interface PostFormProps {
  className?: string;
}

const PostForm: React.FC<PostFormProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-wrap gap-5 justify-between mr-5 ml-4 w-full text-2xl text-black whitespace-nowrap max-w-[1114px] max-md:mr-2.5 max-md:max-w-full ${className}`}
    >
      <input
        type="text"
        placeholder="Username"
        className="px-16 pt-3 pb-6 bg-white bg-opacity-50 rounded-[40px] max-md:px-5"
      />
      <button className="px-11 pt-3 pb-6 bg-white bg-opacity-50 rounded-[40px] max-md:px-5">
        Share
      </button>
    </div>
  );
};

export const ContentSection: React.FC = () => {
  return (
    <section className="px-8 pt-16 mt-4 w-full bg-red-400 max-w-[1226px] rounded-[30px] max-md:px-5 max-md:max-w-full">
      <PostForm />
      <div className="px-12 py-3.5 mt-5 bg-white bg-opacity-10 rounded-[30px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <UserPost
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/175bebea0de93949dad7ec0f8d2ba922e354f9bf?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
            imageAspect="1.64"
            columnWidth="w-3/5"
          />
          <UserPost
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4c37c41ef0a6efaf945a4bc5d356769b348728d1?placeholderIfAbsent=true&apiKey=b7de19d9292142789fae535fd862525d"
            imageAspect="1.09"
            columnWidth="w-2/5"
          />
        </div>
      </div>
      <PostForm className="mt-20 max-md:mt-10" />
      <div className="flex shrink-0 mt-5 h-8 bg-white bg-opacity-10 rounded-[30px] max-md:max-w-full" />
    </section>
  );
};
