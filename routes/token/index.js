const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

{
  /* /token */
}
router.route("/token").get((req, res) => {
  let token = jwt.sign({ _id: "token" }, process.env.SECRET);
  token
    ? res.send(token)
    : res.send("the token could not be created. Please, try again.");
});

module.exports = router;
