const fetchAllProperties = require("~root/actions/properties/fetchAllProperties");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllProperties = async (req, res) => {
  try {
    const { properties } = await fetchAllProperties();
    res.status(201).send({
      properties
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllProperties;
