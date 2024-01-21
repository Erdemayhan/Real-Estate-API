const updateUserByEmail = require("./queries/updateUserByEmail");

const modifyUserByEmail = async ({ userId, email }) => {
  const user = await updateUserByEmail({
    userId,
    email
  });

  return { user };
};

module.exports = modifyUserByEmail;
