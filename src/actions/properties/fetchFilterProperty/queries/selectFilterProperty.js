const { submitQuery, camelKeys } = require("~root/lib/database");

const selectFilterProperty = ({
  location,
  price,
  property_types
}) => submitQuery`
SELECT
    properties.location,
    properties.price,
    property_types.property_type
FROM
    properties
JOIN 
    property_types ON properties.property_type_id = property_types.property_type_id 
WHERE
    properties.location = ${location} AND
    properties.price = ${price} AND
    property_types.property_type = ${property_types}`;

module.exports = camelKeys(selectFilterProperty);
