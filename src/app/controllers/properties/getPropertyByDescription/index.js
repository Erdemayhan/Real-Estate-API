const fetchPropertyByDescription = require("~root/actions/properties/fetchPropertyByDescription");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertyByDescription = async (req, res) => {
  const { description } = req.params;

  try {
    const { properties } = await fetchPropertyByDescription({
      description
    });
    res.status(201).send({
      properties
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertyByDescription;
