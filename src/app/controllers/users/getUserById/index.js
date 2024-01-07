const fetchUserById = require("~root/actions/users/fetchUserById");
const handleAPIError = require("~root/utils/handleAPIError");

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const { user } = await fetchUserById({
      userId
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getUserById;
