const deletePropertyById = require("./queries/deletePropertyById");

const removeProperty = async ({ propertyId }) => {
  const deletedProperty = await deletePropertyById({
    propertyId
  });
  return { deletedProperty };
};

module.exports = removeProperty;
