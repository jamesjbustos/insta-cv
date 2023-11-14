import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from '@/context/UserContext';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
