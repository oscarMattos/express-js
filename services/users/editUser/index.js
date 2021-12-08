const api = require("../../api");

const editUser = ({ id, data, config }) =>
  api
    .patch(`/users/${id}`, data, config)
    .then((result) => {
      let { data } = result;
      return data;
    })
    .catch((error) => console.log("Error", error));

module.exports = editUser;
