const fetchLocations = require("~root/actions/properties/fetchLocations");
const handleAPIError = require("~root/utils/handleAPIError");

const getLocations = async (req, res) => {
  try {
    const { locations } = await fetchLocations();
    res.status(201).send({
      locations
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getLocations;
