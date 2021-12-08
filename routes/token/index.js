const express = require("express");
const router = express.Router();
const { getToken } = require("./../../controllers/token");

router.route("/token").get(getToken);

module.exports = router;
