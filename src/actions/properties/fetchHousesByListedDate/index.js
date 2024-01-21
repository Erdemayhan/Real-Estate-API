const selectHousesByListedDate = require("./queries/selectHousesByListedDate");

const fetchHousesByListedDate = async ({ listedDate }) => {
  const properties = await selectHousesByListedDate({ listedDate });
  return { properties };
};

module.exports = fetchHousesByListedDate;
