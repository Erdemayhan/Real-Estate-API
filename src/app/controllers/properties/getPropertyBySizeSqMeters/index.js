const fetchPropertyBySizeSqMeters = require("~root/actions/properties/fetchPropertyBySizeSqMeters");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertyBySizeSqMeters = async (req, res) => {
  const { sizeSqMeters } = req.params;

  try {
    const { properties } = await fetchPropertyBySizeSqMeters({
      sizeSqMeters
    });
    res.status(201).send({
      properties
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertyBySizeSqMeters;
