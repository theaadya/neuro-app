import * as React from "react";
import { useNavigate } from "react-router-dom";

interface TaskCardProps {
  taskDescription: string;
  onDescriptionChange: (description: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  taskDescription: initialDescription,
  onDescriptionChange,
}) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = React.useState(false);
  const [taskDescription, setTaskDescription] = React.useState(initialDescription);
  const [showPermissionModal, setShowPermissionModal] = React.useState(false);
  const [permissionError, setPermissionError] = React.useState<string | null>(null);

  // Update local state if the prop changes (but only when not editing)
  React.useEffect(() => {
    if (!isEditing && initialDescription) {
      setTaskDescription(initialDescription);
    }
  }, [initialDescription, isEditing]);

  const handleEditClick = () => setIsEditing(true);
  const handleBlur = () => setIsEditing(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDescription(event.target.value);
    onDescriptionChange(event.target.value);
  };

  const handleStartClick = () => {
    setShowPermissionModal(true);
  };

  const requestPermissions = async () => {
    try {
      setPermissionError(null);
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setShowPermissionModal(false);
      navigate("/camera");
    } catch (err) {
      console.error("Permission denied or error occurred", err);
      setPermissionError("Camera and microphone access is required for analysis.");
    }
  };

  return (
    <article className="pt-4 pr-4 pb-6 pl-8 mx-auto w-full text-lg text-white bg-red-400 rounded-[16px] max-md:px-3 max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-3 justify-between w-full max-md:max-w-full">
        <h2 className="self-start">TASK - 1</h2>
        <button
          onClick={handleStartClick}
          className="flex gap-4 px-4 py-1.5 text-sm whitespace-nowrap bg-stone-400 rounded-[40px] shadow-[0px_2px_2px_rgba(0,0,0,0.2)] max-md:pl-3"
        >
          <span>START</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba7d3b749898b982b69b718893d0fc213790fc7?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
            alt="Start icon"
            className="object-contain shrink-0 self-start aspect-[0.83]"
          />
        </button>
      </div>

      <div
        className="flex items-center justify-center shrink-0 mt-6 max-w-full bg-white bg-opacity-10 h-[200px] rounded-[16px] w-[460px] max-md:mt-5 p-4 cursor-pointer"
        onClick={handleEditClick}
      >
        {isEditing ? (
          <textarea
            className="w-full h-full bg-transparent text-white text-xl font-semibold outline-none"
            value={taskDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <p className="text-white text-center text-xl font-semibold">
            {taskDescription}
          </p>
        )}
      </div>

      {/* Permission Modal */}
      {showPermissionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-6 text-black w-[90%] max-w-md shadow-lg">
            <h3 className="text-lg font-bold mb-2">Permission Required</h3>
            <p className="mb-4">
              To provide a more accurate analysis of your session, we need access to your camera and microphone.
              This helps us understand facial expressions and voice tone for better feedback.
            </p>
            {permissionError && (
              <p className="text-red-600 mb-2">{permissionError}</p>
            )}
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 text-white bg-stone-500 rounded-lg"
                onClick={() => setShowPermissionModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-rose-600 rounded-lg"
                onClick={requestPermissions}
              >
                Allow & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
