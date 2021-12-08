const bcrypt = require("bcrypt");

const hashingPassword = (password) => {
  let salt = bcrypt.genSaltSync(6),
    hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const isValidPassword = (password, hashedPassword) =>
  bcrypt.compareSync(password, hashedPassword);

module.exports = { hashingPassword, isValidPassword };
