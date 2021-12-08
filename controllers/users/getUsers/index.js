const UserModel = require("../../../models/user");

const getUsers = (req, res, next) =>
  UserModel.find()
    .then((data) => res.send(data))
    .catch((error) => res.send(error));

module.exports = getUsers;
