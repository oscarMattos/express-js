const api = require("../../api");

const deleteUser = (id) =>
  api
    .delete(`/users/${id}`)
    .then((result) => {
      let { data } = result;
      return data;
    })
    .catch((error) => console.log("Error", error));

module.exports = deleteUser;
