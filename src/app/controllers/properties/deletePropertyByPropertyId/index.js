const handleAPIError = require("~root/utils/handleAPIError");
const removePropertyById = require("~root/actions/properties/removePropertyById");

const deletePropertyById = async (req, res) => {
  const { propertyId } = req.params;

  try {
    const { deletedProperty } = await removePropertyById({
      propertyId
    });

    res.status(201).send({ deletedProperty });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deletePropertyById;
