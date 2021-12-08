const jwt = require("jsonwebtoken");
const UserModel = require("../../../models/user");
const { isValidPassword } = require("../../../utils");

const postLogin = (req, res) => {
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
};

module.exports = postLogin;
