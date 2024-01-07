const { submitQuery } = require("~root/lib/database");

const deleteUserById = async ({ userId }) => {
  // First, delete the properties associated with the user
  await submitQuery`
        DELETE FROM properties WHERE user_id = ${userId}
    `;

  // Then, delete the user
  await submitQuery`
        DELETE FROM users WHERE user_id = ${userId} 
    `;
};

module.exports = deleteUserById;
