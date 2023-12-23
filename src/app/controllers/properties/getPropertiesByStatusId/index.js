const fetchPropertiesByStatusId = require("~root/actions/properties/fetchPropertiesByStatusId");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertiesByStatusId = async (req, res) => {
  const { statusId } = req.params;

  try {
    const { propertyStatus } = await fetchPropertiesByStatusId({
      statusId
    });
    res.status(201).send({
      propertyStatus
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertiesByStatusId;
