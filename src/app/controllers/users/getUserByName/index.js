const fetchUserByName = require("~root/actions/users/fetchUserByName");
const handleAPIError = require("~root/utils/handleAPIError");

const getUserByName = async (req, res) => {
  const { usersName } = req.params;

  try {
    const { user } = await fetchUserByName({
      usersName
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getUserByName;
