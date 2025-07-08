import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

export default function NewProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('AI');
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();
  const [toast, setToast] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast('Project posted successfully!');
    setTimeout(() => {
      setToast('');
      navigate(-1);
    }, 1600);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-blue-100 font-sans">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-indigo-100">
          <h2 className="text-3xl font-extrabold mb-8 text-indigo-700 text-center tracking-tight">Post New Project</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Project Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 placeholder-gray-400 transition"
                placeholder="Enter project title..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Description</label>
              <textarea
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 placeholder-gray-400 transition"
                rows={4}
                placeholder="Describe your project..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Category</label>
              <select
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 transition"
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
              >
                <option>AI</option>
                <option>Health</option>
                <option>Education</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Budget</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 placeholder-gray-400 transition"
                placeholder="$1000"
                value={budget}
                onChange={e => setBudget(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 mt-2"
            >
              Post Project
            </button>
          </form>
        </div>
      </div>
      <Toast message={toast} onClose={() => setToast('')} />
    </>
  );
}
