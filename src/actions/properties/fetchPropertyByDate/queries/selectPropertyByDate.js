const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertiesByDate = ({ date }) => submitQuery`
SELECT *
FROM properties
WHERE listed_date LIKE CONCAT('%',${date},'%')
    `;
module.exports = camelKeys(selectPropertiesByDate);
