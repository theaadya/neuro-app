"use client";
import * as React from "react";
import { NavigationBar } from "../NavigationBar";
import { ProductivityTrends } from "./ProductivityTrends";
import { ChatButton } from "./ChatButton";

const ProductivityDashboard: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Myanmar+Khyay&display=swap"
        rel="stylesheet"
      />
      <div className="relative w-full min-h-screen">
        <NavigationBar />
        <ProductivityTrends />
        <ChatButton />
      </div>
    </>
  );
};

export default ProductivityDashboard;
