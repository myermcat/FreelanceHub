import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Fake role logic: 'client' username is client (admin), 'freelancer' is freelancer, else user
    if (username === 'client') {
      navigate('/admin'); // This will become the client dashboard
    } else if (username === 'freelancer') {
      navigate('/dashboard'); // Freelancer dashboard
    } else {
      navigate('/dashboard'); // Default to freelancer dashboard for now
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-blue-100 font-sans">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-indigo-100">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-indigo-100 rounded-full p-4 mb-2 shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 10-8 0v2m8 0a4 4 0 01-8 0m8 0v2a4 4 0 01-8 0V7" /></svg>
            </div>
            <h2 className="text-3xl font-extrabold text-indigo-700 tracking-tight">FreelanceHub</h2>
            <p className="text-sm text-gray-400 mt-1">Proposal Submission Platform</p>
          </div>

          {/* UX Demo Note */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-50 border-l-4 border-indigo-400 p-4 rounded-xl shadow text-indigo-800 text-sm text-center leading-relaxed">
              <span role="img" aria-label="lightbulb" className="mr-1">💡</span>
              <span className="font-semibold text-indigo-700">Heads up! This is just a UX demo.<br/></span>
              No real data, no backend magic — just pretty buttons and vibes.<br/>
              Type anything you like, play with the buttons, and enjoy the ride!
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 placeholder-gray-400 transition"
                placeholder="Enter your username..."
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 placeholder-gray-400 transition"
                placeholder="Enter your password..."
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
            >
              Login
            </button>
          </form>
          {/* Create Account Button */}
          <button
            type="button"
            className="w-full mt-4 bg-indigo-50 text-indigo-700 py-3 rounded-xl font-semibold text-lg shadow hover:bg-indigo-100 transition-all duration-150 border border-indigo-200"
            onClick={() => {
              setToast('Nice try! This is just a mockup — no real accounts here. Just enter any password and dive in 😄');
            }}
          >
            Create an Account
          </button>
          <p className="text-xs text-gray-400 mt-6 text-center">
            Use <span className="font-semibold">freelancer</span> as username for Freelancer view.<br/>
            Use <span className="font-semibold">client</span> as username for Client (admin) view.<br/>

          </p>
        </div>
      </div>
      <Toast message={toast} onClose={() => setToast('')} />
    </>
  );
}
