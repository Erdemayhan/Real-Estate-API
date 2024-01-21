const express = require("express");
const { ADMIN } = require("~root/constants/userTypes");
const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const getUsers = require("./controllers/users/getUsers");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);

router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes); // DONE

router.get("/users", getUsers);

module.exports = router;

// router.get("/salla/gitsin/farketmez/:password", getAllPasswordsFromUsers);
