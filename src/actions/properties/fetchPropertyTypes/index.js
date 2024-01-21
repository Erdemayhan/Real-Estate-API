const selectPropertyTypes = require("~root/actions/properties/fetchPropertyTypes/queries/selectPropertyTypes");

const fetchPropertyTypes = async () => {
  const property_types = await selectPropertyTypes();
  return { property_types };
};

module.exports = fetchPropertyTypes;
