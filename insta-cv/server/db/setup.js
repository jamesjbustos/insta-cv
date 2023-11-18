import '../config/dotenv.js';
import pool from '../config/database.js';

const createUsersTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS users CASCADE;
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      githubid BIGINT UNIQUE NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      avatarurl TEXT,
      accesstoken TEXT,
      registration_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(createTableQuery);
  console.log('✅ Users table created');
};

const createResumesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS resumes CASCADE;
    CREATE TABLE IF NOT EXISTS resumes (
      resumeID SERIAL PRIMARY KEY,
      userID INT REFERENCES users(id) ON DELETE CASCADE,
      creation_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      content TEXT,
      targeted_role VARCHAR(255),
      templateID INT,  -- This should be a reference to a templates table if you have one
      last_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(createTableQuery);
  console.log('✅ Resumes table created');
};

const createTagsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS tags CASCADE;
    CREATE TABLE IF NOT EXISTS tags (
      tagID SERIAL PRIMARY KEY,
      tag_name VARCHAR(255) UNIQUE NOT NULL
    );
  `;
  await pool.query(createTableQuery);
  console.log('✅ Tags table created');
};

const createResumeTagsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS resume_tags CASCADE;
    CREATE TABLE IF NOT EXISTS resume_tags (
      resumeID INT REFERENCES resumes(resumeID) ON DELETE CASCADE,
      tagID INT REFERENCES tags(tagID) ON DELETE CASCADE,
      PRIMARY KEY (resumeID, tagID)
    );
  `;
  await pool.query(createTableQuery);
  console.log('✅ Resume Tags table created');
};

const setup = async () => {
  await createUsersTable();
  await createResumesTable();
  await createTagsTable();
  await createResumeTagsTable();
};

setup().catch(console.error);
