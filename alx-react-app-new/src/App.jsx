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
      <UserProfile name="Rowina Tamer" age={27} bio="React Developer and Engineer based in Alexandria." />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
