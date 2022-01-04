// external imports
const express = require("express");

// internal imports
const router = express.Router();
const {
   getUsers,
   addUser,
   removeUser,
} = require("../controller/usersController");
const { checkLogin } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
   addUserValidators,
   addUserValidatorHandler,
} = require("../middlewares/users/userValidator");

// users page
router.get("/", decorateHtmlResponse("Users"), checkLogin, getUsers);

// add user
router.post(
   "/",
   checkLogin,
   avatarUpload,
   addUserValidators,
   addUserValidatorHandler,
   addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;
