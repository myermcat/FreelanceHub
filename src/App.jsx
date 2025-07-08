import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import ProposalForm from './pages/ProposalForm';
import UserSubmissions from './pages/UserSubmissions';
import BrowseProjects from './pages/BrowseProjects';
import ClientDashboard from './pages/ClientDashboard';
import NewProjectForm from './pages/NewProjectForm';
import ProjectProposals from './pages/ProjectProposals';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/projects" element={<BrowseProjects />} />
      <Route path="/proposal-form/:projectId" element={<ProposalForm />} />
      <Route path="/proposal-form" element={<ProposalForm />} />
      <Route path="/my-submissions" element={<UserSubmissions />} />
      <Route path="/admin" element={<ClientDashboard />} />
      <Route path="/new-project" element={<NewProjectForm />} />
      <Route path="/project-proposals/:projectId" element={<ProjectProposals />} />
    </Routes>
  );
}
