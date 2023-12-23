const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const getUsers = require("./controllers/users/getUsers");
const getAllProperties = require("./controllers/properties/getAllProperties");
const getPropertiesByTypeId = require("./controllers/properties/getPropertiesByTypeId");
const getPropertiesByStatusId = require("./controllers/properties/getPropertiesByStatusId");
const getPropertiesByRooms = require("./controllers/properties/getPropertiesByRooms");
const getPropertiesByBedrooms = require("./controllers/properties/getPropertiesByBedrooms");
const getPropertiesByBathrooms = require("./controllers/properties/getPropertiesByBathrooms");

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

// Properties

router.get("/properties", getAllProperties);

router.get("/properties/:typeId", getPropertiesByTypeId);

router.get("/properties/status/:statusId", getPropertiesByStatusId);

router.get("/properties/rooms/:rooms", getPropertiesByRooms);

router.get("/properties/rooms/bedrooms/:bedrooms", getPropertiesByBedrooms);

router.get("properties/rooms/bathrooms/:bathrooms", getPropertiesByBathrooms); // Henüz çalışmıyor!

module.exports = router;
