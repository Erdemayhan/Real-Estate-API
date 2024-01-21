const fetchPropertyByTypeId = require("~root/actions/properties/fetchPropertyByTypeId");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertiesByTypeId = async (req, res) => {
  const { typeId } = req.params;

  try {
    const { propertyType } = await fetchPropertyByTypeId({
      typeId
    });
    res.status(201).send({
      propertyType
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertiesByTypeId;
