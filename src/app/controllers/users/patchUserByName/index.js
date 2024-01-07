const modifyUserByName = require("~root/actions/users/modifyUserByName");
const handleAPIError = require("~root/utils/handleAPIError");

const patchUserByName = async (req, res) => {
  const { userId } = req.params;
  const { name } = req.body;

  try {
    const { user } = await modifyUserByName({
      userId,
      name
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchUserByName;
