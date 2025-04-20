"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { SendHorizonal, Mic } from "lucide-react";
import { HumeClient } from "hume";

const hume = new HumeClient({
  apiKey: "Sk9KTQxkPsTG1VhrpwRx86HH3zcAXGFCwOLzDSjWKXN60ZCt",
  secretKey: "JtuLAaSfQ5Zi0lAG2EKGAZrz6Lpm9ZtkpztAvD8eV5GvgBNGAjydttLzY7WAEBRA",
});

interface ChatMessageType {
  message: string;
  isUser: boolean;
}

export const ChatInterface: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [socket, setSocket] = useState<any>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isVoiceInput, setIsVoiceInput] = useState(false); // Flag to differentiate voice and text input

  useEffect(() => {
    const newSocket = hume.empathicVoice.chat.connect();
    let currentAudio: HTMLAudioElement | null = null;

    newSocket.on("message", async (message: any) => {
      if (message.type === "audio_output") {
        const binaryString = atob(message.data);
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          byteArray[i] = binaryString.charCodeAt(i);
        }
        const audioBlob = new Blob([byteArray], { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);

        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(audioUrl);
        currentAudio.play();
      }
    });

    newSocket.tillSocketOpen().then(() => setSocket(newSocket));

    return () => newSocket.close();
  }, []);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    if (isVoiceInput) {
      // Send to Hume if voice input
      if (socket) {
        socket.sendUserInput(input);
        setMessages((prev) => [...prev, { message: input, isUser: true }]);
        setInput("");
        setIsVoiceInput(false); // Reset voice input flag
      }
    } else {
      // Send to Phi LLM if text input
      const userMessage = input.trim();
      setMessages((prev) => [...prev, { message: userMessage, isUser: true }]);
      setInput("");

      try {
        const response = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessages((prev) => [...prev, { message: data.response, isUser: false }]);
        } else {
          setMessages((prev) => [...prev, { message: "Error: " + data.error, isUser: false }]);
        }
      } catch (error) {
        setMessages((prev) => [...prev, { message: "Network error. Try again later.", isUser: false }]);
        console.error("Fetch error:", error);
      }
    }
  };

  const startRecording = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setIsRecording(true);
    setIsVoiceInput(true); // Set flag to indicate voice input

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsRecording(false);
    };

    recognition.onerror = () => {
      setIsRecording(false);
      setIsVoiceInput(false);
    };
  };

  const hasMessages = messages.length > 0;

  return (
    <section className="flex justify-center items-center w-full min-h-screen px-4">
      <div className="w-full max-w-4xl flex flex-col justify-between h-full py-10">
        {!hasMessages && (
          <div className="flex flex-col items-center justify-center text-center flex-grow">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              Start your conversation with <span className="text-rose-400">Nuro</span>.
            </h1>
            <p className="text-gray-500 text-sm">How can I help you today?</p>
          </div>
        )}

        {hasMessages && (
          <div className="flex flex-col space-y-4 overflow-y-auto max-h-[70vh] mb-28">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[75%] px-4 py-3 rounded-2xl text-base shadow-sm ${
                  msg.isUser
                    ? "self-end bg-rose-100 text-right text-gray-800"
                    : "self-start bg-white text-left text-gray-800"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>
        )}

        <div className={`fixed bottom-6 left-0 right-0 flex justify-center px-4 ${!hasMessages ? "" : ""}`}>
          <div className="flex w-full max-w-4xl items-center bg-white rounded-full shadow-lg px-6 py-3 border border-gray-200">
            <button onClick={startRecording} className={`mr-2 text-gray-600 hover:text-gray-800`}>
              <Mic size={24} className={`${isRecording ? "text-rose-500" : "text-stone-500"}`} />
            </button>
            <input
              type="text"
              className="flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-4 text-rose-600 hover:text-rose-800 transition-colors"
            >
              <SendHorizonal size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
