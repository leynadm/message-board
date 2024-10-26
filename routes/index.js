const express = require("express");
const router = express.Router();

const {messages} = require('../data/messajes')


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages: messages });
});

module.exports = router
