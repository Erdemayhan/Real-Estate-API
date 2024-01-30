const fetchFilterForHomePage = require("~root/actions/properties/fetchFilterForHomePage");
const handleAPIError = require("~root/utils/handleAPIError");

const getFilterForHomePage = async (req, res) => {
  const { location, price, property_types } = req.params;

  try {
    const { propertyMatches } = await fetchFilterForHomePage({
      location,
      price,
      property_types
    });
    res.status(201).send({
      propertyMatches
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getFilterForHomePage;
