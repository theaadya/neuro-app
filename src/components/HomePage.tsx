"use client";
import * as React from "react";
import {NavigationBar} from "./NavigationBar";
import NotificationCard from "./NotificationCard";
import {ActionButton} from "./ActionButton";
import AiCompanionFooter from "./AiCompanionFooter";

function HomePage() {
  return (
    <main className="overflow-hidden bg-black">
      <section className="flex flex-col items-start pt-8 pb-16 w-full bg-white rounded-xl border border-black border-solid max-md:max-w-full">
        <NavigationBar />

        <div className="z-10 mt-16 w-full max-w-[1411px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* Left column with image */}
            <div className="w-[55%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ba5844e354717712e1f3be8c1003265ac907b58?placeholderIfAbsent=true&apiKey=9163cbaba4b9452eaa4e875c4a3cc94d"
                alt="Dashboard visualization"
                className="object-contain grow mt-4 w-full aspect-[1.16] max-md:mt-6 max-md:max-w-full"
              />
            </div>

            {/* Right column with notifications and actions */}
            <div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <div className="w-full max-md:mt-2.5 max-md:max-w-full">
                {/* Notification cards */}
                <div className="w-full max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="w-[38%] max-md:ml-0 max-md:w-full">
                      <NotificationCard
                        type="upcoming"
                        text="your upcoming meeting in 2 minutes"
                      />
                    </div>
                    <div className="ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                      <NotificationCard
                        type="capacity"
                        text="CAPACITY INDICATOR"
                        value="90%"
                      />
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <ActionButton
                  className="mt-24 max-md:mt-10"
                > Manage your tasks
                </ActionButton>
                <ActionButton
                 className="mt-8" >
                  Manage your meetings
                </ActionButton>
                <ActionButton
                  className="mt-6"
                >
                  Get your productivity trends
                </ActionButton>
                <ActionButton className="mt-6">
                Be a part of Community
                </ActionButton>
              </div>
            </div>
          </div>
        </div>

        <AiCompanionFooter />
      </section>
    </main>
  );
}

export default HomePage;
