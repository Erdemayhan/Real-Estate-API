const selectPropertiesByStatusId = require("./queries/selectPropertiesByStatusId");

const fetchPropertyByTypeId = async ({ statusId }) => {
  const propertyStatus = await selectPropertiesByStatusId({ statusId });
  return { propertyStatus };
};

module.exports = fetchPropertyByTypeId;
