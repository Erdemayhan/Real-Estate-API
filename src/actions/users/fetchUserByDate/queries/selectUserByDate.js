const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserByDate = ({ date }) => submitQuery`
SELECT 
username,email
FROM 
users
JOIN 
user_types ON users.user_type_id = user_types.user_type_id
WHERE 
users.created_at = ${date};

`;

module.exports = camelKeys(selectUserByDate);
