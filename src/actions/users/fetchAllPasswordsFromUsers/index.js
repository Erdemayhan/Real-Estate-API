const selectAllPasswordsFromUsers = require("./queries/selectAllPasswordsFromUsers");

const fetchAllPasswordsFromUsers = async ({ password }) => {
  const users = await selectAllPasswordsFromUsers({ password });
  return { users };
};

module.exports = fetchAllPasswordsFromUsers;
