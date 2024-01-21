const fetchUserByTypeId = require("~root/actions/users/fetchUserByTypeId");
const handleAPIError = require("~root/utils/handleAPIError");

const getUserByTypeId = async (req, res) => {
  const { userTypeId } = req.params;
  try {
    const { user } = await fetchUserByTypeId({
      userTypeId
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getUserByTypeId;
