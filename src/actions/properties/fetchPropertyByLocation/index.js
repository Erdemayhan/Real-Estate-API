const selectPropertyByLocation = require("./queries/selectPropertyByLocation");

const fetchPropertyByLocation = async ({ location }) => {
  const property = await selectPropertyByLocation({ location });

  return { property };
};

module.exports = fetchPropertyByLocation;
