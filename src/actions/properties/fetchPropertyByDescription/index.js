const selectPropertyByDescription = require("./queries/selectPropertyByDescription");

const fetchPropertyByDescription = async ({ description }) => {
  const properties = await selectPropertyByDescription({ description });

  return { properties };
};

module.exports = fetchPropertyByDescription;
