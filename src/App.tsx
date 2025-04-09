import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CameraCapture from "./components/CameraCapture";
import SignUpPage from "./components/SignUpPage";
import TaskManagement from "./components/TaskManagement";
import TaskCheckList from "./components/TaskCheckList";
import HumeEVI from "./components/HumeEVI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskManagement />} />
        <Route path="/checklist" element={<TaskCheckList />} />
        <Route path="/camera" element={<CameraCapture />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
    // <HumeEVI />
  );
}

export default App;
