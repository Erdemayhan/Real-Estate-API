const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateUserByEmail = ({ userId, email = null }) => {
  const updates = [];

  if (email !== null) {
    updates.push(sql`email= ${email}`);
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

module.exports = updateUserByEmail;
