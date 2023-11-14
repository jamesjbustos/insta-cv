import pool from '../config/database.js';

// Function to save a resume
const saveResume = async (req, res) => {
  const userID = req.user.id; // Get user ID from the authenticated user
  const resumeData = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO resumes (userID, content) VALUES ($1, $2) RETURNING *',
      [userID, resumeData]
    );
    res.json({ success: true, resume: result.rows[0] });
  } catch (error) {
    console.error('Error saving resume:', error);
    res.status(500).send('Error saving resume');
  }
};

// Function to retrieve all resumes for a user
const getResumes = async (req, res) => {
  const userID = req.user.id; // Get user ID from the authenticated session

  try {
    const result = await pool.query('SELECT * FROM resumes WHERE userID = $1', [
      userID,
    ]);
    res.json({ success: true, resumes: result.rows });
  } catch (error) {
    console.error('Error fetching resumes:', error);
    res.status(500).send('Error fetching resumes');
  }
};

export default { saveResume, getResumes };
