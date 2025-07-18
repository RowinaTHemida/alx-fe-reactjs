import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Featured Users</h2>
      <UserProfile name="Alice" age={28} bio="Loves mountains and cities." />
      <UserProfile name="Bob" age={35} bio="Enjoys urban exploration and photography." />
    </main>
  );
}

export default MainContent;
