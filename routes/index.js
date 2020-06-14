const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.render("welcome"));

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  let sessions = req.sessionStore.sessions;
  count = Object.keys(sessions).length;
  return res.render("dashboard", {
    user: req.user,
    count,
  });
});

module.exports = router;
