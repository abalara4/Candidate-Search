import React from 'react';
import './PotentialCandidates.css';

interface User {
  avatar_url: string;
  name: string;
  location: string;
  email: string;
  company: string;
  bio: string;
}

interface PotentialCandidatesProps {
  candidates: User[]; // Accept candidates as a prop
  onRemoveCandidate: (index: number) => void;
}

const PotentialCandidates: React.FC<PotentialCandidatesProps> = ({ candidates, onRemoveCandidate }) => {
  return (
    <div>
      {candidates.length === 0 ? (
        <p>No candidates added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img 
                    src={candidate.avatar_url} 
                    alt={`${candidate.name}'s avatar`} 
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                  />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.location}</td>
                <td>{candidate.email}</td>
                <td>{candidate.company}</td>
                <td>{candidate.bio}</td>
                <td>
                  <button onClick={() => onRemoveCandidate(index)} className="reject-button">-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PotentialCandidates;