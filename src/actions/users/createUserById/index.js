const insertUserById = require("./queries/insertUserById");

const createUserById = async ({ userName, email, password, userTypeId }) => {
  const user = await insertUserById({
    userName,
    email,
    password,
    userTypeId
  });

  return { user };
};

module.exports = createUserById;
