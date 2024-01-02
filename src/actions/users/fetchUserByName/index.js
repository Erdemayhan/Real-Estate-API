const selectUserByName = require("./queries/selectUserByName");

const fetchUserByName = async ({ usersName }) => {
  const user = await selectUserByName({ usersName });
  return { user };
};

module.exports = fetchUserByName;
