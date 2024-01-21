const modifyAllPasswordsFromUsers = require("~root/actions/users/modifyAllPasswordsFromUsers");
const handleAPIError = require("~root/utils/handleAPIError");

const patchAllPasswordsFromUsers = async (req, res) => {
  const { userId } = req.params;
  const { password } = req.body;

  try {
    const { property } = await modifyAllPasswordsFromUsers({
      userId,
      password
    });

    res.status(201).send({
      property
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchAllPasswordsFromUsers;
