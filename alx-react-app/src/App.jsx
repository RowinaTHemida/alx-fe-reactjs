import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
