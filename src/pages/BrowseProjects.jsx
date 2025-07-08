import React from 'react';
import { useNavigate } from 'react-router-dom';

const fakeProjects = [
  { id: '1', title: 'AI Chatbot', category: 'AI', description: 'Build a conversational AI for customer support.' },
  { id: '2', title: 'Health Tracker App', category: 'Health', description: 'Mobile app to track fitness and health metrics.' },
  { id: '3', title: 'E-Learning Platform', category: 'Education', description: 'Develop an online platform for interactive courses.' },
];

export default function BrowseProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-8 text-indigo-700 text-center">Browse Open Projects</h2>
        <div className="space-y-6">
          {fakeProjects.map(project => (
            <div key={project.id} className="border rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between bg-gray-50 shadow-sm">
              <div>
                <div className="text-lg font-semibold text-indigo-800">{project.title}</div>
                <div className="text-sm text-gray-500 mb-2">Category: {project.category}</div>
                <div className="text-gray-600 mb-2">{project.description}</div>
              </div>
              <button
                className="mt-4 md:mt-0 bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                onClick={() => navigate(`/proposal-form/${project.id}`)}
              >
                Submit Proposal
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
