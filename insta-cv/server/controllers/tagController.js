import pool from '../config/database.js';

// Function to create a new tag
const createTag = async (req, res) => {
  const { tagName } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO tags (tag_name) VALUES ($1) RETURNING *',
      [tagName]
    );
    res.json({ success: true, tag: result.rows[0] });
  } catch (error) {
    console.error('Error creating tag:', error);
    res.status(500).send('Error creating tag');
  }
};

// Function to retrieve all tags
const getTags = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tags');
    res.json({ success: true, tags: result.rows });
  } catch (error) {
    console.error('Error fetching tags:', error);
    res.status(500).send('Error fetching tags');
  }
};

// Function to add a tag to a resume
const addTagToResume = async (req, res) => {
  const { resumeID, tagID } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO resume_tags (resumeID, tagID) VALUES ($1, $2) RETURNING *',
      [resumeID, tagID]
    );
    res.json({ success: true, resumeTag: result.rows[0] });
  } catch (error) {
    console.error('Error adding tag to resume:', error);
    res.status(500).send('Error adding tag to resume');
  }
};

// Function to remove a tag from a resume
const removeTagFromResume = async (req, res) => {
  const { resumeID, tagID } = req.body;

  try {
    const result = await pool.query(
      'DELETE FROM resume_tags WHERE resumeID = $1 AND tagID = $2 RETURNING *',
      [resumeID, tagID]
    );

    if (result.rows.length > 0) {
      res.json({
        success: true,
        message: 'Tag removed from resume successfully',
      });
    } else {
      res
        .status(404)
        .send('Tag not found on the resume or not authorized to delete');
    }
  } catch (error) {
    console.error('Error removing tag from resume:', error);
    res.status(500).send('Error removing tag from resume');
  }
};

export default { createTag, getTags, addTagToResume, removeTagFromResume };
