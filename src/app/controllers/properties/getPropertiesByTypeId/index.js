const fetchPropertyByTypeId = require("~root/actions/properties/fetchPropertyByTypeId");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertiesByTypeId = async (req, res) => {
  const { typeId } = req.params;

  try {
    const { property } = await fetchPropertyByTypeId({
      typeId
    });
    res.status(201).send({
      property
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertiesByTypeId;
