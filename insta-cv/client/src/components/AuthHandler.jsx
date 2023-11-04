import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check if the user is logged in
    const checkLoginStatus = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/auth/login/status",
          {
            credentials: "include", // To include the cookie in the request
          }
        );
        const data = await response.json();
        if (data.isLoggedIn) {
          // If login is successful, redirect to the dashboard
          navigate("/dashboard");
        } else {
          // If not logged in, redirect to the landing page
          navigate("/");
        }
      } catch (error) {
        // Handle errors, for example, by setting an error state or redirecting
        console.error("Error checking login status:", error);
        navigate("/");
      }
    };

    checkLoginStatus();
  }, [navigate]);

  return null;
};

export default AuthHandler;
