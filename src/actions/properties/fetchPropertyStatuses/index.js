const selectAllPropertyStatuses = require("~root/actions/properties/fetchPropertyStatuses/queries/selectAllPropertyStatuses");

const fetchPropertyStatuses = async () => {
  const propertyStatuses = await selectAllPropertyStatuses();
  return { propertyStatuses };
};

module.exports = fetchPropertyStatuses;
