import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProposals = [
  {
    id: 1,
    freelancer: 'Jane Doe',
    text: 'I am excited to work on your logo project! I have 5 years of experience in branding and eco design...',
    status: 'Pending'
  },
  {
    id: 2,
    freelancer: 'John Smith',
    text: 'My background in AI and chatbots makes me a perfect fit. Here is how I would approach... (rest of proposal)',
    status: 'Accepted'
  },
  {
    id: 3,
    freelancer: 'Alex Lee',
    text: 'I have worked on similar e-learning platforms. My proposal includes... (rest of proposal)',
    status: 'Rejected'
  }
];

export default function ProjectProposals() {
  const { projectId } = useParams();
  // For now, just show all mock proposals regardless of projectId
  const [expandedId, setExpandedId] = useState(null);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-2">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-8 text-indigo-700 text-center">Proposals for Project</h2>
        <div className="space-y-6">
          {mockProposals.map(proposal => {
            const isOpen = expandedId === proposal.id;
            return (
              <div
                key={proposal.id}
                className={`bg-white rounded-lg shadow border border-blue-50 hover:shadow-md transition cursor-pointer ${isOpen ? 'ring-2 ring-indigo-300' : ''}`}
                onClick={() => setExpandedId(isOpen ? null : proposal.id)}
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-indigo-800 mb-1">{proposal.freelancer}</div>
                    <div className="text-gray-600 mb-2">
                      {isOpen
                        ? proposal.text
                        : proposal.text.length > 80
                          ? proposal.text.slice(0, 80) + '...'
                          : proposal.text}
                    </div>
                  </div>
                  <span className={
                    'mt-4 md:mt-0 md:ml-6 inline-block px-4 py-1 rounded-full text-sm font-semibold ' +
                    (proposal.status === 'Accepted'
                      ? 'bg-green-100 text-green-700'
                      : proposal.status === 'Rejected'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700')
                  }>
                    {proposal.status}
                  </span>
                </div>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-700">
                    <div className="mb-2"><span className="font-medium">Freelancer:</span> {proposal.freelancer}</div>
                    <div className="mb-2"><span className="font-medium">Full Proposal:</span> {proposal.text}</div>
                    <div><span className="font-medium">Status:</span> {proposal.status}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
