import express from "express";
import passport from "passport";

const router = express.Router();

// Login success route
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({ success: true, user: req.user });
  } else {
    // If req.user is not set, it means the user is not logged in.
    res.status(403).json({ success: false, message: "User not authenticated" });
  }
});

// Login failed route
router.get("/login/failed", (req, res) => {
  res.status(401).json({ success: false, message: "Login failed" });
});

// Logout route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid");
      res.json({ status: "Success", user: null });
    });
  });
});

// GitHub authentication route
router.get(
  "/github",
  passport.authenticate("github", { scope: ["read:user"] })
);

// GitHub callback route
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/auth/login/success",
    failureRedirect: "/auth/login/failed",
  })
);

// Export the router
export default router;
