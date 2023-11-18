export const logoutUser = async () => {
  try {
    const url = `http://localhost:3000/auth/logout`;
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
