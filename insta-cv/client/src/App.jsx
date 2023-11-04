import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthHandler from "./components/AuthHandler";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth-handler" element={<AuthHandler />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
