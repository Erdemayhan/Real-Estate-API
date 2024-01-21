const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertyByDescription = ({ description }) => submitQuery`

SELECT
    *
FROM
    properties
WHERE
    description = ${description};
`;

module.exports = camelKeys(selectPropertyByDescription);
