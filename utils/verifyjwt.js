const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers["access-token"];

  token
    ? (() => {
        let verifiedToken = jwt.verify(token, process.env.SECRET);

        verifiedToken
          ? (() => {
              req.user = verifiedToken;
              next();
            })()
          : res.status(401).send("Invalid Access Token");
      })()
    : res.send("Access Denied");
};

module.exports = verifyToken;
