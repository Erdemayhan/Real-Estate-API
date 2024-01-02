const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserByName = ({ usersName }) => submitQuery`
SELECT user_id, email,user_type_id
FROM users
WHERE username LIKE CONCAT('%',${usersName},'%')
    
`;

module.exports = camelKeys(selectUserByName);
