const fetchFilterProperty = require("~root/actions/properties/fetchFilterProperty");
const handleAPIError = require("~root/utils/handleAPIError");

const getFilterProperty = async (req, res) => {
  const { location, price, property_types } = req.params;
  try {
    const { filteredResult } = await fetchFilterProperty({
      location,
      price,
      property_types
    });
    const FilteredSearch = filteredResult.filter(property => {
      return (
        property.location === location &&
        property.price === price &&
        property.property_types === property_types
      );
    });
    res.status(201).send({
      FilteredSearch
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getFilterProperty;
