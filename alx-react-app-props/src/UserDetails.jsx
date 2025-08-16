cat > src/UserDetails.jsx << 'EOF'
import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <p><strong>Name:</strong> {userData?.name}</p>
      <p><strong>Email:</strong> {userData?.email}</p>
    </div>
  );
}

export default UserDetails;
EOF
