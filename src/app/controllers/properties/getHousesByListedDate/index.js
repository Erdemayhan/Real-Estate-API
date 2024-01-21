const fetchHousesByListedDate = require("~root/actions/properties/fetchHousesByListedDate");
const handleAPIError = require("~root/utils/handleAPIError");

const getHousesByListedDate = async (req, res) => {
  const { listedDate } = req.params;

  try {
    const { properties } = await fetchHousesByListedDate({
      listedDate
    });
    res.status(201).send({
      properties
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getHousesByListedDate;
