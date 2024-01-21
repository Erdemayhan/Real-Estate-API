const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectHousesByListedDate = ({ listedDate }) => submitQuery`
SELECT
*
FROM
properties
WHERE
listed_date= ${listedDate}
`;

module.exports = getFirst(camelKeys(selectHousesByListedDate));
