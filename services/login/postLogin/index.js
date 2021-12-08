const api = require("../../api");

const postLogin = ({ data, config }) =>
  api
    .post(`/login`, data, config)
    .then((result) => {
      let { data } = result;
      return data;
    })
    .catch((error) => console.log("Error", error));

module.exports = postLogin;
