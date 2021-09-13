const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/user");
const { hashingPassword } = require("../../utils");

{
  /* /users */
}
router
  .route("/users")
  .get((req, res) =>
    UserModel.find()
      .then((data) => res.send(data))
      .catch((error) => res.send(error))
  )
  .post((req, res) => {
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
  });

{
  /* /users/:id */
}
router
  .route("/users/:id")
  .delete((req, res) => {
    let {
      params: { id },
    } = req;

    UserModel.remove({ _id: id })
      .then((data) => res.send(data))
      .catch((error) => res.send(error));
  })
  .get((req, res) => {
    let {
      params: { id },
    } = req;

    UserModel.findById(id)
      .then((data) => res.send(data))
      .catch((error) => res.send(error));
  })
  .patch((req, res) => {
    let {
      params: { id },
      body,
    } = req;

    UserModel.updateOne({ _id: id }, { $set: body })
      .then((data) => res.send(data))
      .catch((error) => res.send(error));
  });

module.exports = router;
