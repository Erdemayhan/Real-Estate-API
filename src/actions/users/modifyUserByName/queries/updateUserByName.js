const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateUserByName = ({ userId, name = null }) => {
  const updates = [];

  if (name !== null) {
    updates.push(sql`username= ${name}`);
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

module.exports = updateUserByName;
