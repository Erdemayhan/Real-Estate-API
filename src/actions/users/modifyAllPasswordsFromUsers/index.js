const updateAllPasswordsFromUsers = require("./queries/updateAllPasswordFromUser");

const modifyAllPasswordsFromUsers = async ({ userId, password }) => {
  const property = await updateAllPasswordsFromUsers({
    userId,
    password
  });

  return { property };
};

module.exports = modifyAllPasswordsFromUsers;
