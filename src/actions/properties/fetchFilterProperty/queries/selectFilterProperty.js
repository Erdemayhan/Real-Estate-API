const { submitQuery, camelKeys } = require("~root/lib/database");

const selectFilterProperty = ({
  location,
  price,
  property_types,
  property_statuses,
  rooms,
  bedrooms,
  bathrooms,
  sizeSqMeters
}) => submitQuery`
SELECT
    properties.location,
    properties.price,
    property_types.property_type,
    property_statuses.property_status,
    properties.no_of_rooms,
    properties.no_of_bedrooms,
    properties.no_of_bathrooms,
    properties.size_sq_meters
FROM
    properties
JOIN 
    property_types ON properties.property_type_id = property_types.property_type_id
JOIN
    property_statuses ON properties.property_status_id = property_statuses.property_status_id
WHERE
    properties.location = ${location} AND
    properties.price <= ${price} AND
    property_types.property_type = ${property_types} AND
    property_statuses.property_status = ${property_statuses} AND
    properties.no_of_rooms = ${rooms} AND
    properties.no_of_bedrooms = ${bedrooms} AND
    properties.no_of_bathrooms = ${bathrooms} AND
    properties.size_sq_meters = ${sizeSqMeters}`;

module.exports = camelKeys(selectFilterProperty);
