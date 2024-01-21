const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertyByLocation = ({ location }) => submitQuery`
SELECT
    description,
    size_sq_meters,
    price,
    no_of_rooms,
    no_of_bedrooms,
    no_of_bathrooms,
    listed_date
FROM
    properties
WHERE
    location = ${location}`;

module.exports = camelKeys(selectPropertyByLocation);
