const selectUserByEmail = require("./queries/selectUserByEmail.js");

const fetchUserByEmail = async ({ email }) => {
  const user = await selectUserByEmail({
    email
  });

  return { user };
};

module.exports = fetchUserByEmail;
