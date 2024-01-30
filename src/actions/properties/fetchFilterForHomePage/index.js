const selectFilterForHomePage = require("./queries/selectFilterForHomePage");

const fetchFilterForHomePage = async ({ location, price, property_types }) => {
  const propertyMatches = await selectFilterForHomePage({
    location,
    price,
    property_types
  });

  return { propertyMatches };
};

module.exports = fetchFilterForHomePage;
