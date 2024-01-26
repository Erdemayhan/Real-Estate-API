const { submitQuery, getInsertId } = require("~root/lib/database");

const insertProperty = ({
  description,
  location,
  sizeSqMeters,
  price,
  noOfRooms,
  noOfBedrooms,
  noOfBathrooms,
  propertyTypeId,
  propertyStatusId
}) => submitQuery`
    INSERT INTO properties (description, location, size_sq_meters, price, no_of_rooms, no_of_bedrooms, no_of_bathrooms, property_type_id, property_status_id)
    VALUES (${description}, ${location}, ${sizeSqMeters}, ${price}, ${noOfRooms}, ${noOfBedrooms}, ${noOfBathrooms}, ${propertyTypeId}, ${propertyStatusId});
`;

module.exports = getInsertId(insertProperty);

/*  description,
    location,
    sizeSqMeters,
    price,
    noOfRooms,
    noOfBedrooms,
    noOfBathrooms */
