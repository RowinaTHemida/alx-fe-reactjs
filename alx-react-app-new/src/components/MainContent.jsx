// src/MainContent.jsx
import React from "react";
import UserProfile from "./components/UserProfile"; // ✅ المسار الصح

function MainContent() {
  return (
    <main style={{ padding: "20px" }}>
      <UserProfile name="Cairo" age={1076} bio="Historic capital with vibrant culture and the Nile." />
      <UserProfile name="Alexandria" age={2348} bio="Mediterranean charm, libraries, and seaside vibes." />
      <UserProfile name="Dubai" age={189} bio="Modern skyline, innovation, and global lifestyle." />
    </main>
  );
}

export default MainContent;
