import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

const fakeProjects = [
  { id: '1', title: 'AI Chatbot', category: 'AI' },
  { id: '2', title: 'Health Tracker App', category: 'Health' },
  { id: '3', title: 'E-Learning Platform', category: 'Education' },
];

export default function ProposalForm() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = fakeProjects.find(p => p.id === projectId);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [toast, setToast] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast('Proposal submitted successfully!');
    setTimeout(() => {
      setToast('');
      navigate(-1);
    }, 1600);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-blue-100 font-sans">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-indigo-100">
          <h2 className="text-3xl font-extrabold mb-4 text-indigo-700 text-center tracking-tight">
            {project ? `Submit Proposal for: ${project.title}` : 'Submit a New Proposal'}
          </h2>
          <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Proposal Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 placeholder-gray-400 transition"
                placeholder="Enter proposal title..."
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
                placeholder="Describe your proposal..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Category</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 cursor-not-allowed text-gray-600"
                value={project ? project.category : ''}
                disabled
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Upload PDF</label>
              <input
                type="file"
                accept="application/pdf"
                className="w-full px-2 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                onChange={e => setFile(e.target.files[0])}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 mt-2"
            >
              Submit Proposal
            </button>
          </form>
        </div>
      </div>
      <Toast message={toast} onClose={() => setToast('')} />
    </>
  );
}
