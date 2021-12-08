const api = require("../../api");

const getUser = (id) =>
  api
    .get(`/users/${id}`)
    .then((result) => {
      let { data } = result;
      return data;
    })
    .catch((error) => console.log("Error", error));

module.exports = getUser;
