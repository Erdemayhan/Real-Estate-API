const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertyByLocation = () => submitQuery`
    SELECT
        location
    FROM
        properties
`;

module.exports = camelKeys(selectPropertyByLocation);
