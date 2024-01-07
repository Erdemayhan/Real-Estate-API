const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const getUsers = require("./controllers/users/getUsers");
const getUserByName = require("./controllers/users/getUserByName");
const getUserById = require("./controllers/users/getUserById");
const getUserByTypeId = require("./controllers/users/getUserByTypeId");
const getUserByEmail = require("./controllers/users/getUserByEmail");
const getUserByDate = require("./controllers/users/getUserByDate");
const { de } = require("chrono-node");
const deleteUserById = require("./controllers/users/deleteUserById");
const patchUserByName = require("./controllers/users/patchUserByName");
const patchUserByEmail = require("./controllers/users/patchUserByEmail");

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

router.get("/user-types", getUserTypes);

router.get("/users", getUsers);

router.get("/user/:userId", getUserById);

router.get("/user/name/:usersName", getUserByName);

router.get("/user/type/:userTypeId", getUserByTypeId);

router.get("/user/email/:email", getUserByEmail);

router.get("/user/dates/:date", getUserByDate);

router.delete("/user/:userId", deleteUserById);

router.patch("/users/name/:userId", patchUserByName);

router.patch("/users/email/:userId", patchUserByEmail);

module.exports = router;
