import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Proposal Submission Platform</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-6 text-center">
          Use <span className="font-semibold">freelancer</span> as username for Freelancer view.<br/>
          Use <span className="font-semibold">client</span> as username for Client (admin) view.<br/>
          (Logic for client dashboard will be added soon.)
        </p>
      </div>
    </div>
  );
}
