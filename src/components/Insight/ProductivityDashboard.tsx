"use client";
import * as React from "react";
import {NavigationBar} from "../NavigationBar";
import ProductivityTrends from "./ProductivityTrends";
import MetricsPanel from "./MetricsPanel";
import ChatButton from "./ChatButton";

const ProductivityDashboard: React.FC = () => {
  return (
    <main className="overflow-hidden bg-black">
      <section className="flex flex-col pt-8 pb-16 w-full bg-white border border-black border-solid max-md:max-w-full">
        <NavigationBar />
        <div className="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <ProductivityTrends />
          <MetricsPanel />
          <ChatButton />
        </div>
      </section>
    </main>
  );
};

export default ProductivityDashboard;
