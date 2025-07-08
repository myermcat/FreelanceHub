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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-2">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-8 text-indigo-700 text-center">My Submitted Proposals</h2>
        {sampleProposals.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            You haven’t submitted any proposals yet.
          </div>
        ) : (
          <div className="space-y-6">
            {sampleProposals.map(proposal => (
              <div
                key={proposal.id}
                className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between border border-blue-50 hover:shadow-md transition"
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
