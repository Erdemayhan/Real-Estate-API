const fetchAllPasswordsFromUsers = require("~root/actions/users/fetchAllPasswordsFromUsers");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllPasswordsFromUsers = async (req, res) => {
  const { password } = req.params;

  try {
    const { users } = await fetchAllPasswordsFromUsers({
      password
    });
    res.status(201).send({
      users
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllPasswordsFromUsers;
