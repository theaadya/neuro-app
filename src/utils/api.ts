export const fetchTaskBreakdown = async (taskDescription: string) => {
  try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: taskDescription }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch task breakdown");
    }

    const data = await response.json();
    return data.response; // Return the AI-generated response
  } catch (error) {
    console.error("Error fetching task breakdown:", error);
    throw error;
  }
};