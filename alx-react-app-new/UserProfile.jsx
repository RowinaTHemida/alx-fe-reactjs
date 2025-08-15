// src/components/UserProfile.jsx
export default function UserProfile(props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, margin: "12px 0", borderRadius: 12, background: "#fff" }}>
      <h2 style={{ color: "royalblue", margin: "0 0 8px" }}>{props.name}</h2>
      <p style={{ margin: "6px 0" }}>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ margin: 0 }}>Bio: {props.bio}</p>
    </div>
  );
}
