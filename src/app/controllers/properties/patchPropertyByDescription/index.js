const modifyPropertyByDescription = require("~root/actions/properties/modifyPropertyByDescription");
const handleAPIError = require("~root/utils/handleAPIError");

const patchPropertyByDescription = async (req, res) => {
  const { propertyId } = req.params;
  const { description } = req.body;

  try {
    const { property } = await modifyPropertyByDescription({
      propertyId,
      description
    });

    res.status(201).send({
      property
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchPropertyByDescription;
