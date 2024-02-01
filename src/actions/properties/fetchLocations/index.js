const selectLocations = require("./queries/selectLocations");

const fetchLocations = async () => {
  const locations = await selectLocations();

  return { locations };
};

module.exports = fetchLocations;
