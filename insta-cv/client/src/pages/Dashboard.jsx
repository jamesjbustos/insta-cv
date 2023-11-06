const Dashboard = () => {
  const logout = async () => {
    try {
      const url = `http://localhost:3000/auth/logout`;
      const response = await fetch(url, { credentials: "include" });
      if (!response.ok) {
        throw new Error("Logout failed with status: " + response.status);
      }
      window.location.href = "/";
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
