const selectFilterProperty = require("./queries/selectFilterProperty");

const fetchFilterProperty = async ({
  location,
  price,
  property_types,
  property_statuses,
  rooms,
  bedrooms,
  bathrooms,
  sizeSqMeters
}) => {
  const propertyMatch = await selectFilterProperty({
    location,
    price,
    property_types,
    property_statuses,
    rooms,
    bedrooms,
    bathrooms,
    sizeSqMeters
  });

  return { propertyMatch };
};

module.exports = fetchFilterProperty;
