import "./config/dotenv.js";
import express from "express";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import githubStrategy from "./config/auth.js";
import authRoutes from "./routes/auth.js";

const app = express();

// Set up express-session middleware
app.use(
  session({
    secret: "codepath",
    resave: false,
    saveUninitialized: true,
    cookie: {
      // Make sure cookies are only accessible over HTTP and during the session time
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  })
);

// CORS middleware settings
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

// Initialize passport and session support
app.use(passport.initialize());
app.use(passport.session());

// Configure passport to use the GitHub strategy
passport.use(githubStrategy);

// Passport serializeUser function
passport.serializeUser((user, done) => {
  done(null, user);
});

// Passport deserializeUser function
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Use authRoutes for authentication
app.use("/auth", authRoutes);

// API Routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
