const selectPropertiesByBedrooms = require("./queries/selectPropertiesByBedrooms");

const fetchPropertiesByBedrooms = async ({ bedrooms }) => {
  const numberOfBedrooms = await selectPropertiesByBedrooms({ bedrooms });
  return { numberOfBedrooms };
};

module.exports = fetchPropertiesByBedrooms;
