"use client";
import * as React from "react";
import { Header } from "./Header";
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
        <Header />
        <ProductivityTrends />
        <ChatButton />
      </div>
    </>
  );
};

export default ProductivityDashboard;
