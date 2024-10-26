const express = require("express");
const router = express.Router();
const { messages } = require("../data/messajes");

router.get("/", function (req, res, next) {
  res.render("form");
});

// Get message
router.post("/", function (req, res, next) {
  console.log(req.body.message);
  console.log(req.body.user);

  console.log(req.body);
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
