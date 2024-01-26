const createUser = require("~root/actions/users/createUser");
const handleAPIError = require("~root/utils/handleAPIError");
const postUserSchema = require("./schemas/postUserSchema");

const postUser = async (req, res) => {
  const { username, email, password, userTypeId } = req.body;

  try {
    await postUserSchema.validate(
      {
        username,
        email,
        password,
        userTypeId
      },
      {
        abortEarly: false
      }
    );

    const { user } = await createUser({
      username,
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

module.exports = postUser;
