const modifyPropertyStatusById = require("~root/actions/propertyStatuses/modifyPropertyStatusById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchPropertyStatusById = async (req, res) => {
  const { propertyStatusId } = req.params;
  const { propertyStatus } = req.body;

  try {
    const { property } = await modifyPropertyStatusById({
      propertyStatusId,
      propertyStatus
    });

    res.status(201).send({
      property
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchPropertyStatusById;
