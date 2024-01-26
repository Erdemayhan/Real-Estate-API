const insertProperty = require("./queries/insertProperty");

const createProperty = async ({
  description,
  location,
  sizeSqMeters,
  price,
  noOfRooms,
  noOfBedrooms,
  noOfBathrooms,
  propertyTypeId,
  propertyStatusId
}) => {
  const property = await insertProperty({
    description,
    location,
    sizeSqMeters,
    price,
    noOfRooms,
    noOfBedrooms,
    noOfBathrooms,
    propertyTypeId,
    propertyStatusId
  });
  return { property };
};

module.exports = createProperty;

/*  description,
    location,
    sizeSqMeters,
    price,
    noOfRooms,
    noOfBedrooms,
    noOfBathrooms */
