const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllProperties = () => submitQuery`
  SELECT *
  FROM properties
`;

module.exports = camelKeys(selectAllProperties);
