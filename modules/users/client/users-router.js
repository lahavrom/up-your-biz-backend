const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  validateRegisterUserSchema,
  validateLoginUserSchema,
} = require("./middlewares/user-validation-middleware");
const {
  validateAuthentication,
} = require("./middlewares/user-auth-middleware");

const usersController = require("./users-controller");

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateRegisterUserSchema(),
  usersController.registerUser
);

usersRouter.post(
  "/login",
  validateLoginUserSchema(),
  usersController.loginUser
);

usersRouter.get("/me", validateAuthentication, usersController.fetchUser);

usersRouter.post(
  "/update-profile-image",
  validateAuthentication,
  upload.single("image"),
  usersController.updateUserProfileImage
);

module.exports = usersRouter;
