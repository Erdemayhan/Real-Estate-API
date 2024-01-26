const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllProperties = () => submitQuery`
  SELECT property_status
  FROM property_statuses
`;

module.exports = camelKeys(selectAllProperties);
