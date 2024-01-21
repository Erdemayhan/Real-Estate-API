const fetchPropertiesByBathrooms = require("~root/actions/properties/fetchPropertiesByBathrooms");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertiesByBathrooms = async (req, res) => {
  const { bathrooms } = req.params;

  try {
    const { numberOfBathrooms } = await fetchPropertiesByBathrooms({
      bathrooms
    });
    res.status(201).send({
      numberOfBathrooms
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertiesByBathrooms;
