const insertUser = require("./queries/insertUser");

const createUser = async ({ username, email, password }) => {
  const user = await insertUser({
    username,
    email,
    password
  });

  return { user };
};

module.exports = createUser;
