import { Strategy as GitHubStrategy } from "passport-github2";
import pool from "../config/database.js";

const options = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback",
};

const verify = async (accessToken, refreshToken, profile, callback) => {
  // Destructure the necessary profile information
  const { id, login, avatar_url } = profile._json;

  const userData = {
    githubId: id,
    username: login,
    avatarUrl: avatar_url,
    accessToken,
  };

  try {
    // Find or create user in the database
    let user = await findOrCreateUser(userData);
    callback(null, user);
  } catch (error) {
    callback(error);
  }
};

// This function encapsulates user lookup/creation logic
async function findOrCreateUser(userData) {
  const { githubId, username, avatarUrl, accessToken } = userData;

  // Find the user
  let result = await pool.query("SELECT * FROM users WHERE githubid = $1", [
    githubId, // Use githubId for the lookup, as it's unique
  ]);
  let user = result.rows[0];

  // If the user does not exist, create one
  if (!user) {
    result = await pool.query(
      "INSERT INTO users (githubid, username, avatarurl, accesstoken) VALUES ($1, $2, $3, $4) RETURNING *",
      [githubId, username, avatarUrl, accessToken]
    );
    user = result.rows[0];
  }

  return user;
}

export default new GitHubStrategy(options, verify);
