const updatePropertyByDescription = require("./queries/updatePropertyByDescription");

const modifyPropertyByDescription = async ({ propertyId, description }) => {
  const property = await updatePropertyByDescription({
    propertyId,
    description
  });

  return { property };
};

module.exports = modifyPropertyByDescription;
