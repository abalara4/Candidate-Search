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
  return (
    <div className="candidate-card">
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} className="candidate-avatar" />
      <h3 className="candidate-name">{user.name}</h3>
      <p className="candidate-location">{user.location}</p>
      <p className="candidate-email">{user.email ? user.email : 'Email not available'}</p>
      <p className="candidate-company">{user.company ? user.company : 'Company not available'}</p>
      <p className="candidate-bio">{user.bio ? user.bio : 'Bio not available'}</p>
      <div className="candidate-actions">
        <button onClick={() => onAddCandidate(user)} className="add-button">+</button>
        <button onClick={onNextUser} className="next-button">-</button>
      </div>
    </div>
  );
};

export default CandidateSearchCard;