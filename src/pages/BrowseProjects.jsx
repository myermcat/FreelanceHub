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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-blue-100 font-sans">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-indigo-100">
        <h2 className="text-3xl font-extrabold mb-8 text-indigo-700 text-center tracking-tight">Browse Open Projects</h2>
        <div className="space-y-6">
          {fakeProjects.map(project => (
            <div key={project.id} className="border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between bg-indigo-50 shadow-lg mb-2">
              <div>
                <div className="text-xl font-bold text-indigo-800 mb-1">{project.title}</div>
                <div className="text-xs text-purple-500 mb-2 uppercase tracking-wide">{project.category}</div>
                <div className="text-gray-600 mb-2">{project.description}</div>
              </div>
              <button
                className="mt-4 md:mt-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-2 rounded-xl font-bold shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
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
