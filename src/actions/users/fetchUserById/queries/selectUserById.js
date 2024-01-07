const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectUserById = ({ userId }) => submitQuery`
    SELECT username, password, email, user_type_id, created_at
    FROM users
    WHERE user_id = ${userId}
`;

module.exports = getFirst(camelKeys(selectUserById));
