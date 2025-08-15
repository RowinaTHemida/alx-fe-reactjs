import Footer from "./components/Footer";


// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 32,
        padding: "16px 0",
        textAlign: "center",
        borderTop: "1px solid #e5e7eb",
        fontSize: 14,
        color: "#6b7280",
        background: "#fff",
      }}
    >
      <span>&copy; {new Date().getFullYear()} My Cities App</span>
    </footer>
  );
}
