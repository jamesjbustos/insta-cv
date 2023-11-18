import pool from '../config/database.js';

// Function to save a resume
const saveResume = async (req, res) => {
  const userID = req.user.id; // Get user ID from the authenticated session
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
  const userID = req.user.id;

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

// Function to retrieve a specific resume
const getResume = async (req, res) => {
  const resumeID = req.params.resumeId; // Get resume ID from URL parameters
  const userID = req.user.id;

  try {
    const result = await pool.query(
      'SELECT * FROM resumes WHERE resumeID = $1 AND userID = $2',
      [resumeID, userID]
    );

    if (result.rows.length > 0) {
      res.json({ success: true, resume: result.rows[0] });
    } else {
      res.status(404).send('Resume not found');
    }
  } catch (error) {
    console.error('Error fetching resume:', error);
    res.status(500).send('Error fetching resume');
  }
};

// Function to delete a specific resume
const deleteResume = async (req, res) => {
  const resumeID = req.params.resumeId; // Get resume ID from URL parameters
  const userID = req.user.id;

  try {
    const result = await pool.query(
      'DELETE FROM resumes WHERE resumeID = $1 AND userID = $2 RETURNING *',
      [resumeID, userID]
    );

    if (result.rows.length > 0) {
      res.json({ success: true, message: 'Resume deleted successfully' });
    } else {
      res.status(404).send('Resume not found or not authorized to delete');
    }
  } catch (error) {
    console.error('Error deleting resume:', error);
    res.status(500).send('Error deleting resume');
  }
};

export default { saveResume, getResumes, getResume, deleteResume };
