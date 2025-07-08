import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockProjects = [
  {
    id: 'p1',
    title: 'Eco Startup Logo',
    description: 'Design a modern, eco-friendly logo for our new startup.'
  },
  {
    id: 'p2',
    title: 'AI Chatbot',
    description: 'Build a conversational AI for customer support.'
  },
  {
    id: 'p3',
    title: 'E-Learning Platform',
    description: 'Develop an online platform for interactive courses.'
  }
];

export default function ClientDashboard() {
  const navigate = useNavigate();
  const clientName = 'Acme Corp'; // Placeholder

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-2">
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-8 text-indigo-700 text-center">Welcome, {clientName}!</h2>
        <div className="flex justify-center mb-10">
          <button
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow"
            onClick={() => navigate('/new-project')}
          >
            Post New Project
          </button>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-indigo-800">My Posted Projects</h3>
        <div className="space-y-6">
          {mockProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between border border-blue-50 hover:shadow-md transition">
              <div>
                <div className="text-lg font-semibold text-indigo-800">{project.title}</div>
                <div className="text-gray-600 mb-2">{project.description}</div>
              </div>
              <button
                className="mt-4 md:mt-0 bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
                onClick={() => navigate(`/project-proposals/${project.id}`)}
              >
                View Proposals
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
