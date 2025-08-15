// src/App.jsx
import Header from "./components/Header";
import MainContent from "./MainContent"; // أو "./components/MainContent" لو عندك جوه components
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        fontFamily: "system-ui, Arial, sans-serif",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
