"use client";
import * as React from "react";
import { NavigationBar } from "./NavigationBar";
import NotificationCard from "./NotificationCard";
import { ActionButton } from "./ActionButton";
import AiCompanionFooter from "./AiCompanionFooter";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="flex flex-col items-start w-full h-screen bg-white">
        {/* Navigation Bar */}
        <div className="w-full">
          <NavigationBar />
        </div>

        {/* Content Area */}
        <div className="flex flex-1 w-full px-6 pb-4 pt-4 max-md:flex-col max-md:px-4">
          {/* Left Column with Image */}
          <div className="w-1/2 flex items-center justify-center max-md:w-full max-md:mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ba5844e354717712e1f3be8c1003265ac907b58?placeholderIfAbsent=true&apiKey=9163cbaba4b9452eaa4e875c4a3cc94d"
              alt="Dashboard visualization"
              className="object-contain max-h-[80%] w-full"
            />
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex flex-col justify-center space-y-4 max-md:w-full max-md:space-y-3">
            {/* Notification Cards */}
            <div className="flex gap-3">
              <NotificationCard
                type="upcoming"
                text="your upcoming meeting in 2 minutes"
              />
              <NotificationCard
                type="capacity"
                text="CAPACITY INDICATOR"
                value="90%"
              />
            </div>

            {/* Action Buttons */}
            <ActionButton onClick={() => navigate("/task-1")}>
              Manage your tasks
            </ActionButton>
            <ActionButton onClick={() => navigate("/manage")}>
              Manage your meetings
            </ActionButton>
            <ActionButton onClick={() => navigate("/insight")}>
              Get your productivity trends
            </ActionButton>
            <ActionButton>
              <a
                href="/Vr_lounge.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                Join the VR Lounge
              </a>
            </ActionButton>
          </div>
        </div>

        {/* Footer */}
        <AiCompanionFooter />
      </section>
    </main>
  );
}

export default HomePage;
