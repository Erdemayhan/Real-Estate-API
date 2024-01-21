const fetchPropertiesByBedrooms = require("~root/actions/properties/fetchPropertiesByBedrooms");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertiesByBedrooms = async (req, res) => {
  const { bedrooms } = req.params;

  try {
    const { numberOfBedrooms } = await fetchPropertiesByBedrooms({
      bedrooms
    });
    res.status(201).send({
      numberOfBedrooms
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertiesByBedrooms;
