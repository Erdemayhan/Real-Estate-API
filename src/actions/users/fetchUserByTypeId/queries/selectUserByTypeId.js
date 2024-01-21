const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserByTypeId = ({ userTypeId }) => submitQuery`
SELECT 
username,email
FROM 
users
JOIN 
user_types ON users.user_type_id = user_types.user_type_id
WHERE 
users.user_type_id = ${userTypeId};

`;

module.exports = camelKeys(selectUserByTypeId);
