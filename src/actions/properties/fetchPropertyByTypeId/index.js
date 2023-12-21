const selectPropertiesByTypeId = require("./queries/selectPropertyByTypeId");

const fetchPropertyByTypeId = async ({ typeId }) => {
  const property = await selectPropertiesByTypeId({ typeId });
  return { property };
};

module.exports = fetchPropertyByTypeId;
