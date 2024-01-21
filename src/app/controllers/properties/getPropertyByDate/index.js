const fetchPropertyByDate = require("~root/actions/properties/fetchPropertyByDate");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertyByDate = async (req, res) => {
  const { date } = req.params;

  try {
    const { properties } = await fetchPropertyByDate({ date });
    res.status(201).send({
      properties
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertyByDate;
