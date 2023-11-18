import { useState, useEffect } from 'react';
import { fetchResumes } from '@/utils/api';

export const useResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadResumes = async () => {
      try {
        const data = await fetchResumes();
        setResumes(data.resumes);
      } catch (e) {
        setError(e.message);
      }
    };

    loadResumes();
  }, []);

  return { resumes, setResumes, error };
};
