const selectUserByDate = require("./queries/selectUserByDate");

const fetchUserByDate = async ({ date }) => {
  const user = await selectUserByDate({ date });
  return { user };
};

module.exports = fetchUserByDate;
