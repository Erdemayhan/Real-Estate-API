const updateUserByName = require("./queries/updateUserByName");

const modifyUserByName = async ({ userId, name }) => {
  const user = await updateUserByName({
    userId,
    name
  });

  return { user };
};

module.exports = modifyUserByName;
