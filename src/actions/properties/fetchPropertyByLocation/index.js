const selectPropertyByLocation = require("./queries/selectPropertyByLocation");

const fetchPropertyByLocation = async ({ location }) => {
  const properties = await selectPropertyByLocation({ location });

  return { properties };
};

module.exports = fetchPropertyByLocation;
