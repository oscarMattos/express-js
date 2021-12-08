const UserModel = require("../../../models/user");

const deleteUser = (req, res, next) => {
  let {
    params: { id },
  } = req;

  UserModel.remove({ _id: id })
    .then((data) => res.send(data))
    .catch((error) => res.send(error));
};

module.exports = deleteUser;
