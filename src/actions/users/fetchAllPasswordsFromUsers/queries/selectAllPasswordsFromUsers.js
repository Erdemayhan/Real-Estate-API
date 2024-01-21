const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectAllPasswordsFromUsers = () => submitQuery`
SELECT *
FROM users;
`;

module.exports = getFirst(camelKeys(selectAllPasswordsFromUsers));
