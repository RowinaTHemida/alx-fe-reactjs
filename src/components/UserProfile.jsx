import React from "react";

function UserProfile() {
  return (
    <div style={{ border: "2px solid black", padding: "15px", margin: "15px", borderRadius: "8px" }}>
      <h2 style={{ color: "darkgreen" }}>John Doe</h2>
      <p style={{ fontSize: "16px" }}>Age: 25</p>
      <p style={{ fontStyle: "italic" }}>Bio: A passionate React developer.</p>
    </div>
  );
}

export default UserProfile;
