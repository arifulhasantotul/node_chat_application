// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
