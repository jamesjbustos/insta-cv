import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useAuth = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/login/success`, {
          credentials: 'include',
        });
        const data = await response.json();
        if (data.success && data.user) {
          setUser(data.user);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        navigate('/');
      }
    };

    checkAuth();
  }, [navigate, setUser]);

  return { user };
};

export default useAuth;
