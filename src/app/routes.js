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
const getUserById = require("./controllers/users/getUserById");
const getPropertiesByBathrooms = require("./controllers/properties/getPropertiesByBathrooms");
const getUserByName = require("./controllers/users/getUserByName");
const getUserByTypeId = require("./controllers/users/getUsersByTypeId");
const patchPropertyByDescription = require("./controllers/properties/patchPropertyByDescription");
const patchUserByName = require("./controllers/users/patchUserByName");
const patchPropertyStatusById = require("./controllers/properties/patchPropertyStatusById");
const deleteProperty = require("./controllers/properties/deleteProperty");
const getPropertyByLocation = require("./controllers/properties/getPropertyByLocation");
const getPropertyTypes = require("./controllers/properties/getPropertyTypes");
const getPropertyByDate = require("./controllers/properties/getPropertyByDate");

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

router.get("/users", getUsers); // DONE

router.get("/users/:userId", getUserById); // DONE

router.get("/user/name/:usersName", getUserByName); // DONE

router.get("/user/type/:userTypeId", getUserByTypeId); // DONE

router.patch("/users/name/:userId", patchUserByName); // DONE

// Properties

router.get("/properties", getAllProperties); // DONE

router.get("/property_types", getPropertyTypes); // DONE

router.get("/properties/:typeId", getPropertiesByTypeId); // DONE

router.get("/properties/status/:statusId", getPropertiesByStatusId); // DONE

router.get("/property/:location", getPropertyByLocation); // DONE

router.get("/properties/rooms/:rooms", getPropertiesByRooms); // DONE

router.get("/properties/rooms/bedrooms/:bedrooms", getPropertiesByBedrooms); // DONE

router.get("/properties/rooms/bathrooms/:bathrooms", getPropertiesByBathrooms); // DONE

router.get("/properties/date/:date", getPropertyByDate); // DATETIME NEEDS CHANGING

router.patch("/properties/description/:propertyId", patchPropertyByDescription); // DONE

router.patch("/properties/status/:propertyId", patchPropertyStatusById); // DONE

router.delete("/property/:propertyId", deleteProperty); // DONE

module.exports = router;
