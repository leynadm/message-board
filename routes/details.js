const express = require("express");
const router = express.Router();
const { messages } = require("../data/messajes");

router.get("/:id", function (req, res, next) {

    console.log('logging the request object:')
    console.log(req.params)
const messageId = Number(req.params.id, 10);

console.log('logging message id:')
console.log(messageId)

  // Validate the id to ensure it exists within messages array
  if (messageId >= 0 && messageId < messages.length) {
    const message = messages[messageId];
    res.render("details", { message });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = router;
