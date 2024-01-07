const modifyUserByEmail = require("~root/actions/users/modifyUserByEmail");
const handleAPIError = require("~root/utils/handleAPIError");

const patchUserByEmail = async (req, res) => {
  const { userId } = req.params;
  const { email } = req.body;

  try {
    const { user } = await modifyUserByEmail({
      userId,
      email
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchUserByEmail;
