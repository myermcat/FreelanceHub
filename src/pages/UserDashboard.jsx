import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  const navigate = useNavigate();
  const username = 'Jane Doe'; // Placeholder for demo

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 w-full text-center">
          Welcome, {username}!
        </h2>
        <button
          className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold mb-4 hover:bg-indigo-700 transition"
          onClick={() => navigate('/projects')}
        >
          Browse Projects
        </button>
        <button
          className="w-full bg-gray-200 text-indigo-700 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
          onClick={() => navigate('/my-submissions')}
        >
          View My Submissions
        </button>
      </div>
    </div>
  );
}
