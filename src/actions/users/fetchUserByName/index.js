const selectUserByName = require("./queries/selectUserByName.js");

const fetchUserByName = async ({ usersName }) => {
  const user = await selectUserByName({
    usersName
  });

  return { user };
};

module.exports = fetchUserByName;
