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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-center">
            {project ? `Submit Proposal for: ${project.title}` : 'Submit a New Proposal'}
          </h2>
          <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Proposal Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Description</label>
              <textarea
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows={4}
                placeholder="Describe your proposal"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Category</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded bg-gray-100 cursor-not-allowed text-gray-600"
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
              className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition mt-2"
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
