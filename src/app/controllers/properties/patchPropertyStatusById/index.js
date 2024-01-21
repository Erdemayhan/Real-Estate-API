const modifyPropertyStatusById = require("~root/actions/properties/modifyPropertyStatusById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchPropertyStatusById = async (req, res) => {
  const { propertyId } = req.params;
  const { statusId } = req.body;

  try {
    const { propertyStatus } = await modifyPropertyStatusById({
      propertyId,
      statusId
    });

    res.status(201).send({
      propertyStatus
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchPropertyStatusById;
