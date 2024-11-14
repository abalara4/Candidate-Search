import React from 'react';
import './CandidateSearchCard.css';

type CandidateSearchCardProps = {
  user: {
    avatar_url: string;
    name: string;
    location: string;
    email: string;
    company: string;
    bio: string;
  };
  onAddCandidate: (user: { avatar_url: string; name: string; location: string; email: string; company: string; bio: string; }) => void; // Function to handle adding a candidate
  onNextUser: () => void; // Function to handle moving to the next user
};

const CandidateSearchCard: React.FC<CandidateSearchCardProps> = ({ user, onAddCandidate, onNextUser }) => {
  
  const handleAddCandidate = () => {
    // Call the onAddCandidate function passed from the parent
    onAddCandidate(user);

    // Retrieve existing candidates from local storage
    const existingCandidates = JSON.parse(localStorage.getItem('potentialCandidates') || '[]');

    // Add the new candidate to the existing candidates
    const updatedCandidates = [...existingCandidates, user];

    // Save the updated candidates back to local storage
    localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div className="candidate-card">
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} className="candidate-avatar" />
      <h3 className="candidate-name">{user.name}</h3>
      <p className="candidate-location">{user.location}</p>
      <p className="candidate-email">{user.email ? user.email : 'Email not available'}</p>
      <p className="candidate-company">{user.company ? user.company : 'Company not available'}</p>
      <p className="candidate-bio">{user.bio ? user.bio : 'Bio not available'}</p>
      <div className="candidate-actions">
        <button onClick={handleAddCandidate} className="add-button">+</button>
        <button onClick={onNextUser} className="next-button">-</button>
      </div>
    </div>
  );
};

export default CandidateSearchCard;