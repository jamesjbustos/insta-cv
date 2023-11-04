import { useState } from "react";

const Dashboard = () => {
  const [error, setError] = useState(null);

  const logout = async () => {
    try {
      const url = `http://localhost:3000/auth/logout`;
      const response = await fetch(url, { credentials: "include" });
      const json = await response.json();
      // Handle logout response
      if (json.status === "Success") {
        window.location.href = "/";
      } else {
        // If the logout was not successful, set an error message
        setError("Logout failed. Please try again.");
      }
    } catch (error) {
      // Handle any other errors
      setError("An error occurred while trying to log out.");
    }
  };

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <button onClick={logout} className="headerBtn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
