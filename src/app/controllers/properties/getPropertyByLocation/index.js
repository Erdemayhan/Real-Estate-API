const fetchPropertyByLocation = require("~root/actions/properties/fetchPropertyByLocation");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertyByLocation = async (req, res) => {
  const { location } = req.params;

  try {
    const { property } = await fetchPropertyByLocation({
      location
    });
    res.status(201).send({
      property
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertyByLocation;
