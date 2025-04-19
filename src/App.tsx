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
import Dashboard from "./components/desktop5/Dashboard";
import Mg1Layout from "./components/desktop11/Mg1Layout";
import HomePage from "./components/HomePage";
import Chatbot from "./components/chatbot/Chatbot";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
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
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
