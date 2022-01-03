// external imports
const express = require("express");

// internal imports
const router = express.Router();
const {
   getUsers,
   addUser,
   removeUser,
} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
   addUserValidators,
   addUserValidatorHandler,
} = require("../middlewares/users/userValidator");

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
   "/",
   avatarUpload,
   addUserValidators,
   addUserValidatorHandler,
   addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;
