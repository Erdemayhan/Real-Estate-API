const selectPropertyByDate = require("./queries/selectPropertyByDate");

const fetchPropertyByDate = async ({ date }) => {
  const properties = await selectPropertyByDate({ date });
  return { properties };
};

module.exports = fetchPropertyByDate;
