import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CameraCapture from "./components/CameraCapture";
import SignUpPage from "./components/SignUpPage";
import TaskManagement from "./components/TaskManagement";
import TaskCheckList from "./components/TaskCheckList";
import LoginPage from "./components/LoginPage";
import PersonalizationPage from "./components/PersonalizationPage";
import CognitivePreferencesForm from "./components/CognitivePreferencesForm";
import CognitivePreferencesQuestion from "./components/CognitivePreferencesQuestion";
import TaskManagementPreferences from "./components/TaskManagementPreferences";
import {PersonalizationForm} from "./components/PersonalizationForm";
import CommunitySettingsPage from "./components/CommunitySettingsPage";
import SocialSupportSettings from './components/support5';
import TaskManagementPreference from "./components/mg1";
import DataPrivacyConsent from "./components/datacollectionpage/DataPrivacyConsent";
import { DataPrivacyConsent1 } from "./components/dataprivacypage/DataPrivacyConsent";
import MeetingDashboard from "./components/desktop5/MeetingDashboard";
import Mg1Layout from "./components/desktop11/Mg1Layout";
import Desktop4 from "./components/desktop4/Desktop4";
import AddTask from "./components/addTask/AddTask";
import HomePage from "./components/HomePage";
import CreateMindMap from "./components/createMindMap/CreateMindMap";
import SetPriorityLevel from "./components/SetPriority/SetPriorityLevel";
import ProductivityDashboard from "./components/Insight/ProductivityDashboard";
import TaskManage1 from "./components/Task1/TaskMange1";
import Desktop30 from "./components/desktop30/Desktop30";
import Chatbot from "./components/chatbot/Chatbot";
import ProtectedRoute from "./components/ProtectedRoute";
import TaskAnalysis from "./components/TaskAnalysis";
import HumeChat from "./components/HumeEVI";
import { PersonalizationCard } from "./components/PersonalizationCard";



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          // element={
          //   <ProtectedRoute>
          //     <HomePage />
          //   </ProtectedRoute>
          // }

        />
        <Route path="/taskmanage" element={<TaskManagement />} />
        <Route path="/checklist" element={<TaskCheckList />} />
        <Route path="/camera" element={<CameraCapture />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/PersonalizationPage" element={<PersonalizationPage />} />
        <Route path="/CognitivePreferencesForm" element={<CognitivePreferencesForm />} />
        <Route path="/CognitivePreferencesquestion" element={<CognitivePreferencesQuestion />} />
        <Route path="/TaskManagementPreferences" element={<TaskManagementPreferences />} />
        <Route path="/PersonalizationForm" element={<PersonalizationForm />} />
        <Route path="/CommunitySettingsPage" element={<CommunitySettingsPage />} />
        <Route path="/SocialSupportSettings" element={<SocialSupportSettings />} />
        <Route path="/mg1" element={<TaskManagementPreference />} />
        <Route path="/DataPrivacy" element={<DataPrivacyConsent />} />
        <Route path="/DataPrivacyConsent" element={<DataPrivacyConsent1 />} />
        <Route path="/manage" element={<MeetingDashboard />} />
        <Route path="/desktop11" element={<Mg1Layout />} />
        <Route path="/desktop4" element={<Desktop4 />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-mind-map" element={<CreateMindMap />} />
        <Route path="/setpriority" element={<SetPriorityLevel />} />
        <Route path = "/insight" element={<ProductivityDashboard />}/>
        <Route path="/task-1" element={<TaskManage1 />} />
        <Route path="/desktop30" element={<Desktop30 />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/analysis" element={<TaskAnalysis />} />
        <Route path="/humechat" element={<HumeChat />} />

        <Route path ="/personalizationcard" element={<PersonalizationCard />} />

      </Routes>
    </Router>
  );
}

export default App;
