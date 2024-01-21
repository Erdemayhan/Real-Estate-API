const { submitQuery, camelKeys } = require("~root/lib/database");

const insertProperty = ({
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
}) => submitQuery`
  INSERT INTO properties
  (
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
  )
  VALUES
  (
    ${propertyId}
    ${userId},
    ${propertyTypeId},
    ${propertyStatusId},
    ${description},
    ${location},
    ${sizeSqMeters},
    ${numberOfRooms},
    ${numberOfBedrooms},
    ${numberOfBathrooms},
    ${price},
    ${listedDate}
  )
`;

module.exports = camelKeys(insertProperty);
