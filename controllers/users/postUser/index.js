const UserModel = require("../../../models/user");
const { hashingPassword } = require("../../../utils");

const postUser = (req, res) => {
  let {
    body: { name, email, password },
  } = req;

  let user, error;

  user = new UserModel({
    name,
    email,
    password,
  });

  error = user.validateSync();

  error
    ? res.send(error)
    : (() => {
        user.password = hashingPassword(password);

        user
          .save()
          .then((data) => res.send(data))
          .catch((error) => res.send(error));
      })();
};

module.exports = postUser;
