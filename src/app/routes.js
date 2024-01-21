const express = require("express");
const { ADMIN } = require("~root/constants/userTypes");
const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const getUsers = require("./controllers/users/getUsers");
const getHousesByListedDate = require("./controllers/properties/getHousesByListedDate");
const getPropertyByDescription = require("./controllers/properties/getPropertyByDescription");
const getPropertyByLocation = require("./controllers/properties/getPropertyByLocation");
const getAllPasswordsFromUsers = require("./controllers/users/getAllPasswordsFromUsers");
const getPropertyBySizeSqMeters = require("./controllers/properties/getPropertyBySizeSqMeters");
const postProperty = require("./controllers/properties/postProperty");
const patchPropertyByDescription = require("./controllers/properties/patchPropertyByDescription");
const patchPropertyStatusById = require("./controllers/propertyStatuses/patchPropertyStatusById");
const patchAllPasswordsFromUsers = require("./controllers/users/patchAllPasswordsFromUsers");
const deletePropertyById = require("./controllers/properties/deletePropertyByPropertyId");

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

// works //
router.get("/properties/est/:listedDate", getHousesByListedDate);

// works //
router.get("/properties/def/:description", getPropertyByDescription);

// works //
router.patch("/properties/rdef/:propertyId", patchPropertyByDescription);

// works //
router.get("/propertiesloc/city/:location", getPropertyByLocation);

// works //
router.get("/properties/meters/:sizeSqMeters", getPropertyBySizeSqMeters);

// test edemedik postmande maybe internet issues //
router.post("/properties/id/:property", postProperty);

// works //
router.get("/users/login/:password", getAllPasswordsFromUsers);

// works //
router.patch(
  "/property_statuses/situation/:propertyStatusId",
  patchPropertyStatusById
);

// works //
router.patch("/users/newPassword/:userId", patchAllPasswordsFromUsers);

// works //
router.delete("/property/:propertyId", deletePropertyById);

module.exports = router;

// router.get("/salla/gitsin/farketmez/:password", getAllPasswordsFromUsers);
