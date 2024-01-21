const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateAllPasswordsFromUsers = ({ userId, password = null }) => {
  const updates = [];

  if (password !== null) {
    updates.push(sql`username = ${password}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
        UPDATE
        users
      SET
        ${updates.reduce(sqlReduce)}
      WHERE
        user_id = ${userId};
        `;
  }
  return Promise.resolve();
};

module.exports = updateAllPasswordsFromUsers;
