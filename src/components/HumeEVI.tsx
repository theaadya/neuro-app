import React, { useState, useEffect } from "react";
import { HumeClient } from "hume";

const hume = new HumeClient({
    apiKey: "Sk9KTQxkPsTG1VhrpwRx86HH3zcAXGFCwOLzDSjWKXN60ZCt",
    secretKey: "JtuLAaSfQ5Zi0lAG2EKGAZrz6Lpm9ZtkpztAvD8eV5GvgBNGAjydttLzY7WAEBRA"
});

const HumeChat = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState(""); // Stores transcribed text
    const [socket, setSocket] = useState<any>(null);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        const newSocket = hume.empathicVoice.chat.connect();
        let currentAudio: HTMLAudioElement | null = null;

        newSocket.on("message", async (message: any) => {
            if (message.type === "audio_output") {
                // Convert audio data to playable format
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

    const sendMessage = () => {
        if (socket && input.trim()) {
            socket.sendUserInput(input);
            setInput("");
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

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            setIsRecording(false);
        };

        recognition.onerror = () => {
            setIsRecording(false);
        };
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Hume AI Chat</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="p-2 border rounded w-80 mb-4"
                placeholder="Type a message..."
            />
            <button
                onClick={sendMessage}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
            >
                Send
            </button>
            <button
                onClick={startRecording}
                className={`px-4 py-2 text-white rounded ${isRecording ? "bg-red-500" : "bg-green-500"} hover:opacity-80`}
            >
                {isRecording ? "Recording..." : "Start Recording"}
            </button>
            
            {/* Display Transcribed Output */}
            {response && (
                <div className="mt-4 p-3 bg-white border rounded w-80 shadow">
                    <h2 className="text-lg font-semibold">Hume's Response:</h2>
                    <p className="text-gray-700">{response}</p>
                </div>
            )}
        </div>
    );
};

export default HumeChat;
