const UserModel = require("../../../models/user");

const getUser = (req, res, next) => {
  let {
    params: { id },
  } = req;

  UserModel.findById(id)
    .then((data) => res.send(data))
    .catch((error) => res.send(error));
};

module.exports = getUser;
