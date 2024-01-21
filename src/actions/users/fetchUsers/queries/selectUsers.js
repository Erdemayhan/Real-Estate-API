const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUsers = () => submitQuery`
    SELECT
        users.username,
        users.email,
        users.user_type_id,
        users.created_at
    FROM users
    LEFT JOIN user_types ON users.user_type_id = user_types.user_type_id;
`;

module.exports = camelKeys(selectUsers);
