import express from 'express';
import cors from 'cors';
import pgSession from 'connect-pg-simple';

import passport from 'passport';
import pool from './config/database.js';
import session from 'express-session';
import { GitHub } from './config/auth.js';
import authRoutes from './routes/auth.js';

import pdfRoutes from './routes/pdfRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import tagRoutes from './routes/tagRoutes.js';

const CLIENT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://instacv.jamesjbustos.com'
    : 'http://localhost:5173';

const corsOptions = {
  origin: CLIENT_URL,
  methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization',
};

const app = express();

const PgStore = pgSession(session);

app.use(
  session({
    store: new PgStore({
      pool: pool,
      tableName: 'session',
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  })
);

app.use(express.json());
app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(GitHub);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/', (req, res) => {
  res.redirect(CLIENT_URL);
});

// authentication routes
app.use('/auth', authRoutes);

// app routes
app.use('/api/pdf', pdfRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/tags', tagRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
