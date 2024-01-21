const removeUserById = require("~root/actions/users/removeUserById");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const { deletedUser } = await removeUserById({
      userId
    });

    res.status(201).send({ deletedUser });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteUserById;
