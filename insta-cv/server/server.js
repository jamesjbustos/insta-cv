import express from "express";
import cors from "cors";

import passport from "passport";
import session from "express-session";
import { GitHub } from "./config/auth.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(
  session({
    secret: "sq7taigbtwo2brby",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(GitHub);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  res.redirect("http://localhost:5173");
});

// authentication routes
app.use("/auth", authRoutes);

// app routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
