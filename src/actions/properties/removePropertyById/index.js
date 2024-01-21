const deletePropertyById = require("./queries/deletePropertyById");

const removePropertytById = async ({ propertyId }) => {
  const deletedProperty = await deletePropertyById({ propertyId });
  return { deletedProperty };
};

module.exports = removePropertytById;
