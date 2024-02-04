const createUserById = require("~root/actions/users/createUserById/index");
const handleAPIError = require("~root/utils/handleAPIError");

const postUserbyId = async (req, res) => {
  const { userName, email, password, userTypeId } = req.body;
  try {
    const { user } = await createUserById({
      userName,
      email,
      password,
      userTypeId
    });

    res.status(201).send({ user });
  } catch (error) {
    handleAPIError(res, error);
  }
};

module.exports = postUserbyId;
