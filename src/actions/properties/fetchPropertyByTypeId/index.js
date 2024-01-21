const selectPropertiesByTypeId = require("./queries/selectPropertyByTypeId");

const fetchPropertyByTypeId = async ({ typeId }) => {
  const propertyType = await selectPropertiesByTypeId({ typeId });
  return { propertyType };
};

module.exports = fetchPropertyByTypeId;
