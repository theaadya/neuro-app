"use client";

import React from "react";
import { Navigation } from "./Navigation";
import { Calendar } from "./Calendar";
import { TimePicker } from "./TimePicker";
import { Button } from "./Button";

export const AddTask = () => {
  return (
    <main className="overflow-hidden bg-black">
      <section className="flex flex-col pt-8 pr-20 pb-16 pl-1 w-full bg-white rounded-xl border border-black border-solid max-md:pr-5 max-md:max-w-full">
        <Navigation />

        <div className="self-end mt-24 w-full max-w-[1224px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[74%] max-md:ml-0 max-md:w-full">
              <article className="flex flex-col items-start px-14 py-8 mx-auto w-full bg-red-400 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <h1 className="text-4xl text-white">ADD TASK</h1>

                <input
                  type="text"
                  placeholder="Task - 5"
                  className="px-12 py-7 mt-14 max-w-full text-2xl text-white bg-white bg-opacity-10 rounded-[30px] w-[707px] max-md:px-5 max-md:mt-10"
                />

                <div className="mt-8 ml-3.5 max-w-full w-[687px]">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-10">
                        <h2 className="self-start ml-8 text-2xl text-white max-md:ml-2.5">
                          Due Date
                        </h2>
                        <Calendar />
                      </div>
                    </div>

                    <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-10">
                        <h2 className="self-start text-2xl text-white">
                          Due Time
                        </h2>
                        <TimePicker />
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  className="self-end mt-12 max-md:mt-10"
                >
                  Done
                </Button>
              </article>
            </div>

            <aside className="ml-5 w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-12 text-2xl text-white max-md:mt-10">
                <span className="self-end mr-6 max-md:mr-2.5">90%</span>
                <button className="px-16 pt-4 pb-1.5 bg-black mt-[568px] rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
                  chat with <br />
                  NURO
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddTask;
