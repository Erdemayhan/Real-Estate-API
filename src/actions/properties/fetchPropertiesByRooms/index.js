const selectPropertiesByRooms = require("./queries/selectPropertiesByRooms");

const fetchPropertyByTypeId = async ({ rooms }) => {
  const numberOfRooms = await selectPropertiesByRooms({ rooms });
  return { numberOfRooms };
};

module.exports = fetchPropertyByTypeId;
