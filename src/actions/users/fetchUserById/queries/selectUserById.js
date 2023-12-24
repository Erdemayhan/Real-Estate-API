const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserById = ({ userId }) => submitQuery`
    SELECT *
    FROM users
    WHERE user_id = '${userId}'
`;

module.exports = camelKeys(selectUserById);
