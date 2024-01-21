const updatePropertyStatusById = require("./queries/updatePropertyStatusById");

const modifyPropertyStatusById = async ({
  propertyStatusId,
  propertyStatus
}) => {
  const property = await updatePropertyStatusById({
    propertyStatus,
    propertyStatusId
  });

  return { property };
};

module.exports = modifyPropertyStatusById;
