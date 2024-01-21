const fetchPropertyTypes = require("~root/actions/properties/fetchPropertyTypes");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertyTypes = async (req, res) => {
  try {
    const { property_types } = await fetchPropertyTypes();
    res.status(201).send({
      property_types
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertyTypes;
