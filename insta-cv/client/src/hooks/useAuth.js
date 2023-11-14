import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';

const useAuth = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/auth/login/success',
          {
            credentials: 'include',
          }
        );
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
