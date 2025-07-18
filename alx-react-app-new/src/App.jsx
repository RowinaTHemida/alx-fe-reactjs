// src/App.jsx
import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <UserProfile name="Rowina" age={27} bio="Engineer and React Lover" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
