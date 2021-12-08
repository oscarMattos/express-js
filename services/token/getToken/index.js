const api = require("../../api");

const getToken = () =>
  api
    .get(`/token`)
    .then((result) => {
      let { data } = result;
      return data;
    })
    .catch((error) => console.log("Error", error));

module.exports = getToken;
