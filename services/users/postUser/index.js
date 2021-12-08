const api = require("../../api");

const postUser = ({ data, config }) =>
  api
    .post(`/users`, data, config)
    .then((result) => {
      let { data } = result;
      return data;
    })
    .catch((error) => console.log("Error", error));

module.exports = postUser;
