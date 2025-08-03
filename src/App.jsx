<<<<<<< HEAD
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
=======
import React from "react";
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
>>>>>>> 0b0011322ae951e222766d7592d9e5a7a805d207
  );
}

export default App;
