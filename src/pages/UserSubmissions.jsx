import React from 'react';

const statuses = ['Pending', 'Accepted', 'Rejected'];

const sampleProposals = [
  {
    id: 1,
    projectTitle: 'Design a logo for eco startup',
    date: '2025-07-01',
    text: 'I would love to design a modern, eco-friendly logo for your startup. My portfolio includes... (rest of proposal)',
    status: statuses[Math.floor(Math.random() * statuses.length)]
  },
  {
    id: 2,
    projectTitle: 'AI Chatbot',
    date: '2025-07-03',
    text: 'My experience in conversational AI makes me a great fit for this project. I propose to... (rest of proposal)',
    status: statuses[Math.floor(Math.random() * statuses.length)]
  },
  {
    id: 3,
    projectTitle: 'E-Learning Platform',
    date: '2025-07-05',
    text: 'I have built several e-learning solutions before. My approach would be to... (rest of proposal)',
    status: statuses[Math.floor(Math.random() * statuses.length)]
  }
];

export default function UserSubmissions() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-blue-100 font-sans px-2">
      <div className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-2xl border border-indigo-100">
        <h2 className="text-3xl font-extrabold mb-8 text-indigo-700 text-center tracking-tight">My Submitted Proposals</h2>
        {sampleProposals.length === 0 ? (
          <div className="bg-indigo-50 rounded-2xl shadow-lg p-8 text-center text-gray-500 border border-indigo-100">
            You haven’t submitted any proposals yet.
          </div>
        ) : (
          <div className="space-y-6">
            {sampleProposals.map(proposal => (
              <div
                key={proposal.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between border border-gray-100 hover:shadow-lg transition duration-200 ease-in-out"
              >
                <div className="flex-1">
                  <div className="text-lg font-semibold text-indigo-800 mb-1">
                    {proposal.projectTitle}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">Submitted on {proposal.date}</div>
                  <div className="text-gray-600 mb-2">
                    {proposal.text.length > 80
                      ? proposal.text.slice(0, 80) + '...'
                      : proposal.text}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <span
                    className={
                      'inline-block px-4 py-1 rounded-full text-sm font-semibold ' +
                      (proposal.status === 'Accepted'
                        ? 'bg-green-100 text-green-700'
                        : proposal.status === 'Rejected'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700')
                    }
                  >
                    {proposal.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
