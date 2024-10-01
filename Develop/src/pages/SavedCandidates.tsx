import React from 'react';
import PotentialCandidates from '../components/PotentialCandidates'; // Adjust the path as necessary

interface User {
  avatar_url: string;
  name: string;
  location: string;
  email: string;
  company: string;
  bio: string;
}

interface SavedCandidatesProps {
  candidates: User[];
  setPotentialCandidates: (candidates: User[]) => void; // Function to update candidates
}

const SavedCandidates: React.FC<SavedCandidatesProps> = ({ candidates, setPotentialCandidates }) => {
  const handleRemoveCandidate = (index: number) => {
    const updatedCandidates = candidates.filter((_, i) => i !== index);
    setPotentialCandidates(updatedCandidates);
    console.log('Removed candidate at index:', index);
  };

  return (
    <div>
      <h1>Potential Candidates</h1>
      <PotentialCandidates 
        candidates={candidates} // Pass candidates prop
        onRemoveCandidate={handleRemoveCandidate} 
      />
    </div>
  );
};

export default SavedCandidates;
