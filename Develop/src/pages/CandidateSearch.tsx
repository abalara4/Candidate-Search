import React from 'react';
import CandidateSearchCard from '../components/CandidateSearchCard';

const CandidateSearch: React.FC = () => {
  const user = {
    avatar_url: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    location: 'New York, NY',
    email: 'john.doe@example.com',
    company: 'Example Inc.',
    bio: 'Software Developer'
  }; // Replace with actual user object
  const onAddCandidate = () => {
    console.log('Add candidate');
  }; // Replace with actual function
  const onNextUser = () => {
    console.log('Next user');
  }; // Replace with actual function

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateSearchCard 
        user={user} 
        onAddCandidate={onAddCandidate} 
        onNextUser={onNextUser} 
      />
    </div>
  );
};

export default CandidateSearch;
