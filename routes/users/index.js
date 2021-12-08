const express = require("express");
const router = express.Router();
const {
  deleteUser,
  editUser,
  getUser,
  getUsers,
  postUser,
} = require("../../controllers/users");
const { verifyToken } = require("../../utils");

router.use("/users", verifyToken);

router.route("/users").get(getUsers).post(postUser);

router.route("/users/:id").delete(deleteUser).get(getUser).patch(editUser);

module.exports = router;
