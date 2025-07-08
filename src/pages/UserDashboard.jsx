import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  const navigate = useNavigate();
  const username = 'Jane Doe'; // Placeholder for demo

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-blue-100 font-sans">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center border border-indigo-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-100 rounded-full p-4 mb-2 shadow">
            <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-indigo-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 10-8 0v2m8 0a4 4 0 01-8 0m8 0v2a4 4 0 01-8 0V7' /></svg>
          </div>
          <h2 className="text-3xl font-extrabold text-indigo-700 tracking-tight w-full text-center">Welcome, {username}!</h2>
        </div>

        <button
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 mb-4"
          onClick={() => navigate('/projects')}
        >
          Browse Projects
        </button>
        <button
          className="w-full bg-indigo-100 text-indigo-700 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-200 transition mb-2 shadow"
          onClick={() => navigate('/my-submissions')}
        >
          View My Submissions
        </button>
      </div>
    </div>
  );
}
