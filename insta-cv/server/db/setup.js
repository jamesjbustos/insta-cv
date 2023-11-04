import pool from "../config/database.js";
import "../config/dotenv.js";

const createUsersTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS users;
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
  console.log("✅ Users table created");
};

const setup = async () => {
  await createUsersTable();
};

setup().catch(console.error);
