const updatePropertyStatusById = require("./queries/updatePropertyStatusById");

const modifyPropertyStatusById = async ({ propertyId, statusId }) => {
  const propertyStatus = await updatePropertyStatusById({
    propertyId,
    statusId
  });

  return { propertyStatus };
};

module.exports = modifyPropertyStatusById;
