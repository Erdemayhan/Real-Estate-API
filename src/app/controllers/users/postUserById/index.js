const handleAPIError = require("~root/utils/handleAPIError");
const createUserById = require("~root/actions/users/createUserById");

const postUserbyId = async (req, res) => {
  const { userName, email, password, userTypeId } = req.body;

  try {
    const { user } = await createUserById({
      userName,
      email,
      password,
      userTypeId
    });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postUserbyId;
