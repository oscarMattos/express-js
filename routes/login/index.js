const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const UserModel = require("../../models/user");
const { hashingPassword, isValidPassword } = require("../../utils");

{
  /* /login */
}
router.route("/login").post((req, res) => {
  let {
    body: { name, email, password },
  } = req;

  UserModel.findOne({ email })
    .then((user) => (user ? user : res.send("Invalid User")))
    .then((user) =>
      isValidPassword(password, user.password)
        ? (() => {
            let token = jwt.sign({ _id: user.id }, process.env.SECRET);
            res.json({
              body: {
                user,
                token,
              },
            });
          })()
        : res.send("Invalid Password")
    )
    .catch((error) => res.send(error));
});

module.exports = router;
