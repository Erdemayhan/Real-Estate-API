const fetchUserByEmail = require("~root/actions/users/fetchUserByEmail");
const handleAPIError = require("~root/utils/handleAPIError");

const getUserByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const { user } = await fetchUserByEmail({
      email
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getUserByEmail;
