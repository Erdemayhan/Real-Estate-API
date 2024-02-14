const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const getUsers = require("./controllers/users/getUsers");
const getUserById = require("./controllers/users/getUserById");
const getUserByTypeId = require("./controllers/users/getUserByTypeId");
const getUserByEmail = require("./controllers/users/getUserByEmail");
const getUserByDate = require("./controllers/users/getUserByDate");
const deleteUserById = require("./controllers/users/deleteUserById");
const patchUserByName = require("./controllers/users/patchUserByName");
const patchUserByEmail = require("./controllers/users/patchUserByEmail");
const getAllProperties = require("./controllers/properties/getAllProperties");
const getPropertyTypes = require("./controllers/properties/getPropertyTypes");
const getPropertiesByTypeId = require("./controllers/properties/getPropertiesByTypeId");
const getPropertiesByStatusId = require("./controllers/properties/getPropertiesByStatusId");
const getPropertyByLocation = require("./controllers/properties/getPropertyByLocation");
const getPropertiesByRooms = require("./controllers/properties/getPropertiesByRooms");
const getPropertiesByBedrooms = require("./controllers/properties/getPropertiesByBedrooms");
const getPropertiesByBathrooms = require("./controllers/properties/getPropertiesByBathrooms");
const getPropertyByDate = require("./controllers/properties/getPropertyByDate");
const patchPropertyByDescription = require("./controllers/properties/patchPropertyByDescription");
const patchPropertyStatusById = require("./controllers/properties/patchPropertyStatusById");
const deletePropertyById = require("~root/actions/properties/removeProperty/queries/deletePropertyById");
const getUserByName = require("./controllers/users/getUserByName");
const patchAllPasswordsFromUsers = require("./controllers/users/patchAllPasswordFromUsers");
const getPropertyBySizeSqMeters = require("./controllers/properties/getPropertyBySizeSqMeters");
const postProperty = require("./controllers/properties/postProperty");
const getPropertyStatuses = require("./controllers/properties/getPropertyStatuses");
const getFilterProperty = require("./controllers/properties/getFilterProperty");
const getFilterForHomePage = require("./controllers/properties/getFilterHomePage");
const getLocations = require("./controllers/properties/getLocations");
const postUserbyId = require("./controllers/users/postUserById");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);

router.post("/register", postUser);

router.put("/edit/user", authentication, putUserDetails);

// Users
router.get("/user_types", getUserTypes); // DONE

router.get("/users", getUsers); // DONE

router.get("/user/:userId", getUserById); // DONE

router.get("/user/name/:usersName", getUserByName); // DONE

router.get("/user/type/:userTypeId", getUserByTypeId); // DONE

router.get("/user/email/:email", getUserByEmail); // DONE

router.get("/user/dates/:date", getUserByDate); // DONE

router.delete("/user/:userId", deleteUserById); // DONE

router.patch("/users/name/:userId", patchUserByName); // DONE

router.patch("/users/email/:userId", patchUserByEmail); // DONE

router.patch("/users/newPassword/:userId", patchAllPasswordsFromUsers); // DONE

// Properties

router.get("/properties", getAllProperties); // DONE

router.get("/property_types", getPropertyTypes); // DONE

router.get("/properties/:typeId", getPropertiesByTypeId); // DONE

router.get("/properties/status/:statusId", getPropertiesByStatusId); // DONE

router.get("/property/:location", getPropertyByLocation); // DONE

router.get("/locations", getLocations); // DONE

router.get("/properties/rooms/:rooms", getPropertiesByRooms); // DONE

router.get("/properties/rooms/bedrooms/:bedrooms", getPropertiesByBedrooms); // DONE

router.get("/properties/rooms/bathrooms/:bathrooms", getPropertiesByBathrooms); // DONE

router.get("/properties/date/:date", getPropertyByDate); // DATETIME NEEDS CHANGING

router.get("/properties/meters/:sizeSqMeters", getPropertyBySizeSqMeters); // DONE

router.get("/property_statuses", getPropertyStatuses);

router.post("/property", postProperty); // DONE

router.patch("/properties/description/:propertyId", patchPropertyByDescription); // DONE

router.patch("/properties/status/:propertyId", patchPropertyStatusById); // DONE

router.delete("/property/:propertyId", deletePropertyById); // DONE

// Filtering

router.get(
  "/properties/filter/:location/:price/:property_types/:property_statuses/:rooms/:bedrooms/:bathrooms/:sizeSqMeters",
  getFilterProperty
);

router.get(
  "/properties/homePageFilter/:location/:price/:property_types",
  getFilterForHomePage
);

module.exports = router;
