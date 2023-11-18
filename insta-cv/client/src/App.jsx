import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume/edit/:resumeId" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
