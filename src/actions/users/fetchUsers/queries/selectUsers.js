const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUsers = () => submitQuery`
    SELECT *
    FROM users
    
`;

module.exports = camelKeys(selectUsers);
