// src/components/MainContent.jsx
import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f4f4f4', fontSize: '18px' }}>
      <p>Here are some amazing cities to visit!</p>
      <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
        <li>Paris</li>
        <li>Tokyo</li>
        <li>New York</li>
        <li>Dubai</li>
      </ul>
    </main>
  );
}

export default MainContent;
