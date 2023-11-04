import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check if the user is already logged in
    const checkLoginStatus = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/auth/login/success",
          {
            credentials: "include",
          }
        );
        const data = await response.json();
        if (data.success) {
          // If already logged in, redirect to the dashboard
          navigate("/dashboard");
        }
      } catch (error) {
        // Handle errors appropriately
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, [navigate]);

  const handleLogin = () => {
    const authUrl = "http://localhost:3000/auth/github";
    window.location.href = authUrl;
  };

  return (
    <div className="LandingPage">
      <h1>App landing page</h1>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

export default LandingPage;
