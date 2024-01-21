const fetchPropertiesByRooms = require("~root/actions/properties/fetchPropertiesByRooms");
const handleAPIError = require("~root/utils/handleAPIError");

const getPropertiesByRooms = async (req, res) => {
  const { rooms } = req.params;

  try {
    const { numberOfRooms } = await fetchPropertiesByRooms({
      rooms
    });
    res.status(201).send({
      numberOfRooms
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPropertiesByRooms;
