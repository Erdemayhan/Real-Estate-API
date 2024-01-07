const deleteUserById = require("./queries/deleteUserById");

const removeUserById = async ({ userId }) => {
  const deletedUser = await deleteUserById({ userId });
  return { deletedUser };
};

module.exports = removeUserById;
