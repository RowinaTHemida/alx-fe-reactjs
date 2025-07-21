import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer'; // Add this

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Rowina" age="27" bio="Frontend Dev & React Lover 💻" />
      <MainContent />
      <Footer /> {/* Add this */}
    </div>
  );
}

export default App;
