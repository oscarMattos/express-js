const jwt = require("jsonwebtoken");

const getToken = (req, res, next) => {
  let token = jwt.sign({ _id: "token" }, process.env.SECRET);
  token
    ? res.send(token)
    : res.send("Token could not be created. Please, try again.");
};

module.exports = getToken;
