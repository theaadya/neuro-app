"use client";
import React from "react";

interface NotificationCardProps {
  type: "upcoming" | "capacity";
  text: string;
  value?: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  text,
  value,
}) => {
  if (type === "upcoming") {
    return (
      <div className="flex grow gap-4 px-7 py-5 w-full text-xl text-black bg-rose-200 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-3.5">
        <div className="flex shrink-0 my-auto bg-red-500 rounded-full h-[62px] w-[13px]" />
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div className="flex gap-4 px-6 py-5 mt-2.5 w-full text-white bg-red-500 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-6">
      <p className="my-auto text-xl basis-auto">{text}</p>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default NotificationCard;
