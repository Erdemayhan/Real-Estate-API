const selectPropertyBySizeSqMeters = require("./queries/selectPropertyBySizeSqMeters");

const fetchPropertyBySizeSqMeters = async ({ sizeSqMeters }) => {
  const properties = await selectPropertyBySizeSqMeters({ sizeSqMeters });

  return { properties };
};

module.exports = fetchPropertyBySizeSqMeters;
