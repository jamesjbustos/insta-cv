import express from 'express';
import passport from 'passport';

const router = express.Router();

const CLIENT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://instacv.jamesjbustos.com'
    : 'http://localhost:5173';

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({ success: true, user: req.user });
  } else {
    res.status(200).json({ success: false });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({ success: true, message: 'failure' });
});

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(error);
    }

    req.session.destroy((err) => {
      res.clearCookie('connect.sid');
      res.json({ status: 'logout', user: {} });
    });
  });
});

router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['read:user'],
  })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: `${CLIENT_URL}/dashboard`,
    failureRedirect: '/',
  })
);

export default router;
