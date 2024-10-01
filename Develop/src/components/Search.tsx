import React, { useState } from 'react';
import CandidateSearchCard from './candidateSearchCard';


const users = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    name: 'John Doe',
    location: 'New York, NY',
    email: 'john.doe@example.com',
    company: 'Example Inc.',
    bio: 'Software Developer',
  },
  // Add more user objects as needed
];

const Search: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  interface Candidate {
    avatar_url: string;
    name: string;
    location: string;
    email: string;
    company: string;
    bio: string;
  }

  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  const handleAddCandidate = (user: Candidate) => {
    setPotentialCandidates([...potentialCandidates, user]);
    console.log('Added candidate:', user);
  };

  const handleNextUser = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length); // Loop back to the start
  };


  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateSearchCard 
        user={users[currentIndex]} 
        onAddCandidate={handleAddCandidate} 
        onNextUser={handleNextUser} 
      />
    </div>
  );
};

export default Search;
