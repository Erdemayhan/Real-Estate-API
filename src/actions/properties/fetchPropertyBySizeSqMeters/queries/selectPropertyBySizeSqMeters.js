const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectPropertyBySizeSqMeters = ({ sizeSqMeters }) => submitQuery`
SELECT *
FROM properties
WHERE size_sq_meters = ${sizeSqMeters}`;

module.exports = getFirst(camelKeys(selectPropertyBySizeSqMeters));
