import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h2>User Card</h2>
      <p>{user.name}</p>
    </div>
  );
};

export default UserCard;
