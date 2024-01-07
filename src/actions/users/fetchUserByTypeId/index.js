const selectUserByTypeId = require("./queries/selectUserByTypeId");

const fetchUserByTypeId = async ({ userTypeId }) => {
  const user = await selectUserByTypeId({ userTypeId });
  return { user };
};

module.exports = fetchUserByTypeId;
