export const fetchResumes = async () => {
  const response = await fetch('http://localhost:3000/api/resumes', {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to fetch resumes');
  return response.json();
};

export const deleteResume = async (resumeId) => {
  const response = await fetch(
    `http://localhost:3000/api/resumes/${resumeId}`,
    {
      method: 'DELETE',
      credentials: 'include',
    }
  );
  if (!response.ok) throw new Error('Failed to delete resume');
  return response.json();
};

export const fetchResumeById = async (resumeId) => {
  const response = await fetch(
    `http://localhost:3000/api/resumes/${resumeId}`,
    {
      credentials: 'include',
    }
  );
  if (!response.ok) throw new Error('Failed to fetch resume');
  return response.json();
};

export const saveResume = async (formData) => {
  const response = await fetch('http://localhost:3000/api/resumes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to save resume');
  return response.json();
};
