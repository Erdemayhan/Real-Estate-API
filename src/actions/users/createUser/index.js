const insertUser = require("./queries/insertUser");

const createUser = async ({ username, email, password, userTypeId }) => {
  const user = await insertUser({
    username,
    email,
    password,
    userTypeId
  });

  return { user };
};

module.exports = createUser;
