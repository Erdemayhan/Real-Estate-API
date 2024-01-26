const createProperty = require("~root/actions/properties/createProperty");
const handleAPIError = require("~root/utils/handleAPIError");

const postProperty = async (req, res) => {
  const {
    description,
    location,
    sizeSqMeters,
    price,
    noOfRooms,
    noOfBedrooms,
    noOfBathrooms,
    propertyTypeId,
    propertyStatusId
  } = req.body;

  try {
    const { property } = await createProperty({
      description,
      location,
      sizeSqMeters,
      price,
      noOfRooms,
      noOfBedrooms,
      noOfBathrooms,
      propertyTypeId,
      propertyStatusId
    });

    res.status(201).send({
      property
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postProperty;
