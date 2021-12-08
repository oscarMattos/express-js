const api = require("../../api");

const getUsers = () =>
  api
    .get(`/users`)
    .then((result) => {
      let { data } = result;
      return data;
    })
    .catch((error) => console.log("Error", error));

module.exports = getUsers;