const createUserById = require("~root/actions/users/createUserById");

const postUserbyId = async (req, res) => {
  const { userName, email, password, userTypeId } = req.body;

  const { user } = await createUserById({
    userName,
    email,
    password,
    userTypeId
  });

  res.status(201).send(user);

  return user;
};

module.exports = postUserbyId;
