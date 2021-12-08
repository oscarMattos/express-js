const UserModel = require("../../../models/user");

const editUser = (req, res, next) => {
  let {
    params: { id },
    body,
  } = req;

  UserModel.updateOne({ _id: id }, { $set: body })
    .then((data) => res.send(data))
    .catch((error) => res.send(error));
};

module.exports = editUser;
