const selectPropertiesByBathrooms = require("./queries/selectPropertiesByBathrooms");

const fetchPropertiesByBathrooms = async ({ bathrooms }) => {
  const numberOfBathrooms = await selectPropertiesByBathrooms({ bathrooms });
  return { numberOfBathrooms };
};

module.exports = fetchPropertiesByBathrooms;
