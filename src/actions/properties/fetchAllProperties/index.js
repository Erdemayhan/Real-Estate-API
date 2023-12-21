const selectAllProperties = require("~root/actions/properties/fetchAllProperties/queries/selectAllProperties");

const fetchAllProperties = async () => {
  const properties = await selectAllProperties();
  return { properties };
};

module.exports = fetchAllProperties;
