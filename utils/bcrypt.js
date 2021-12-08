const bcrypt = require("bcrypt");

const hashingPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(6));

const isValidPassword = (password, hashedPassword) =>
  bcrypt.compareSync(password, hashedPassword);

module.exports = { hashingPassword, isValidPassword };
