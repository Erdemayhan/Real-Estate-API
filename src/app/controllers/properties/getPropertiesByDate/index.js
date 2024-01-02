const fetchPropertiesByDate = require("~root/actions/properties/fetchPropertiesByDate");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertiesByDate = async (req, res) => {
  const { date } = req.params;

  try {
    const { property } = await fetchPropertiesByDate({
      date
    });
    res.status(201).send({
      property
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertiesByDate;
