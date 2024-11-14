import { useEffect, useState } from 'react';
import './PotentialCandidates.css';
import './PotentialCandidates.css';
import Candidate from '../interfaces/Candidate.interface';

const PotentialCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  // Save candidates to local storage whenever the candidates array changes
  useEffect(() => {
    localStorage.setItem('potentialCandidates', JSON.stringify(candidates));
  }, [candidates]);

  // Load candidates from local storage when the component mounts
  useEffect(() => {
    const savedCandidates = localStorage.getItem('potentialCandidates');
    if (savedCandidates) {
      setCandidates(JSON.parse(savedCandidates));
    }
  }, []);

  function onRemoveCandidate(index: number): void {
    const updatedCandidates = candidates.filter((_, i) => i !== index);
    setCandidates(updatedCandidates);
  }

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
                <td>{candidate.Email}</td>
                <td>{candidate.Company}</td>
                <td>{candidate.Bio}</td>
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