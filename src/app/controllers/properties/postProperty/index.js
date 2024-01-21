const fetchProperty = require("~root/actions/properties/createProperty");

const postProperty = async (req, res) => {
  const {
    propertyId,
    userId,
    propertyTypeId,
    propertyStatusId,
    description,
    location,
    sizeSqMeters,
    numberOfRooms,
    numberOfBedrooms,
    numberOfBathrooms,
    price,
    listedDate
  } = req.body;

  const { properties } = await fetchProperty({
    propertyId,
    userId,
    propertyTypeId,
    propertyStatusId,
    description,
    location,
    sizeSqMeters,
    numberOfRooms,
    numberOfBedrooms,
    numberOfBathrooms,
    price,
    listedDate
  });

  res.status(201).send(properties);

  return properties;
};

module.exports = postProperty;
