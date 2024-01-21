const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertyTypes = () => submitQuery`
SELECT property_type
FROM property_types
`;

module.exports = camelKeys(selectPropertyTypes);
