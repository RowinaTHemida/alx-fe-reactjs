// src/App.jsx
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer'; // ✨

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Rowina" age="27" bio="Frontend Dev & Tech Enthusiast" />
      <Footer /> {/* ✨ */}
    </div>
  );
}

export default App;
