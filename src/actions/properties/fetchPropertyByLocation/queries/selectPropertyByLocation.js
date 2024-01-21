const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectPropertyByLocation = ({ location }) => submitQuery`
SELECT
*
FROM
properties
WHERE
location = ${location}`;

module.exports = getFirst(camelKeys(selectPropertyByLocation));
