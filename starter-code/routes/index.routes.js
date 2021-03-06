const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use((req, res, next) => req.session.currentUser ? next() : res.redirect("/login"))

router.get("/profile", (req, res) => res.render("profile"));

module.exports = router;
