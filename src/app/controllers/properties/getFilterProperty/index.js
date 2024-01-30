const fetchFilterProperty = require("~root/actions/properties/fetchFilterProperty");
const handleAPIError = require("~root/utils/handleAPIError");

const getFilterProperty = async (req, res) => {
  const {
    location,
    price,
    property_types,
    property_statuses,
    rooms,
    bedrooms,
    bathrooms,
    sizeSqMeters
  } = req.params;

  try {
    const { propertyMatch } = await fetchFilterProperty({
      location,
      price,
      property_types,
      property_statuses,
      rooms,
      bedrooms,
      bathrooms,
      sizeSqMeters
    });
    res.status(201).send({
      propertyMatch
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getFilterProperty;
