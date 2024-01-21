const insertProperty = require("./queries/insertProperty");

const createProperty = async ({
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
}) => {
  const property = await insertProperty({
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

  return { property };
};

module.exports = createProperty;
