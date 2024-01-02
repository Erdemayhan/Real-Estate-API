/* eslint-disable prefer-template */
const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserByName = ({ usersName }) => submitQuery`
    SELECT email, user_id, username
    FROM users
    WHERE username LIKE ${"%" + usersName + "%"}
    `;

module.exports = camelKeys(selectUserByName);
