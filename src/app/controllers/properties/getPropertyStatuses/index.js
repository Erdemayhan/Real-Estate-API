const fetchPropertyStatuses = require("~root/actions/properties/fetchPropertyStatuses");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertyStatuses = async (req, res) => {
  try {
    const { propertyStatuses } = await fetchPropertyStatuses();
    res.status(201).send({
      propertyStatuses
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertyStatuses;
