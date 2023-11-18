const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchResumes = async () => {
  const response = await fetch(`${API_BASE_URL}/api/resumes`, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to fetch resumes');
  return response.json();
};

export const deleteResume = async (resumeId) => {
  const response = await fetch(`${API_BASE_URL}/api/resumes/${resumeId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to delete resume');
  return response.json();
};

export const fetchResumeById = async (resumeId) => {
  const response = await fetch(`${API_BASE_URL}/api/resumes/${resumeId}`, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to fetch resume');
  return response.json();
};

export const saveResume = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/resumes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to save resume');
  return response.json();
};
