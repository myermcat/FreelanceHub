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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-blue-100 font-sans px-2">
      <div className="w-full max-w-3xl bg-white p-10 rounded-3xl shadow-2xl border border-indigo-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-100 rounded-full p-4 mb-2 shadow">
            <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-indigo-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 10-8 0v2m8 0a4 4 0 01-8 0m8 0v2a4 4 0 01-8 0V7' /></svg>
          </div>
          <h2 className="text-3xl font-extrabold text-indigo-700 tracking-tight text-center">Welcome, {clientName}!</h2>
        </div>

        <div className="flex justify-center mb-10">
          <button
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
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
