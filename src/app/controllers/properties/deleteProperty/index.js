const handleAPIError = require("~root/utils/handleAPIError");
const removeProperty = require("~root/actions/properties/removeProperty");

const deleteProperty = async (req, res) => {
  const { propertyId } = req.params;

  try {
    const { deletedProperty } = await removeProperty({
      propertyId
    });

    res.status(204).send({
      deletedProperty
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteProperty;
