import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Rowina" age="27" bio="Frontend Dev & React Lover 💻" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
