const selectFilterProperty = require("./queries/selectFilterProperty");

const fetchFilterProperty = async ({ location, price, property_types }) => {
  const filteredResult = await selectFilterProperty({
    location,
    price,
    property_types
  });

  return { filteredResult };
};

module.exports = fetchFilterProperty;
