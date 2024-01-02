const selectPropertiesByDate = require("./queries/selectPropertiesByDate");

const fetchPropertiesByDate = async ({ date }) => {
  const property = await selectPropertiesByDate({ date });
  return { property };
};

module.exports = fetchPropertiesByDate;
