const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const logoutUser = async () => {
  try {
    const url = `${API_BASE_URL}/auth/logout`;
    const response = await fetch(url, { credentials: 'include' });
    if (!response.ok) {
      throw new Error('Logout failed with status: ' + response.status);
    }
    window.location.href = '/';
  } catch (error) {
    console.error('Error during logout:', error);
    alert('An error occurred during logout. Please try again.');
  }
};
