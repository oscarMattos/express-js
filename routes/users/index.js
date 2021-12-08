const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../utils");

const {
  deleteUser,
  editUser,
  getUser,
  getUsers,
  postUser,
} = require("../../controllers/users");

router.use("/users", verifyToken);

router.route("/users").get(getUsers).post(postUser);

router.route("/users/:id").delete(deleteUser).get(getUser).patch(editUser);

module.exports = router;
