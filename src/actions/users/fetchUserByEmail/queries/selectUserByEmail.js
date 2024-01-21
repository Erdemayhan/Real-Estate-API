const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserByEmail = ({ email }) => submitQuery`
SELECT user_id, username,user_type_id
FROM users
WHERE email LIKE CONCAT('%',${email},'%')
    
`;

module.exports = camelKeys(selectUserByEmail);
