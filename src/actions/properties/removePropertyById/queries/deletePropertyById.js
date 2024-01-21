const { submitQuery } = require("~root/lib/database");

const deletePropertyById = ({ propertyId }) => submitQuery`
    DELETE FROM properties WHERE property_id = ${propertyId}
`;

module.exports = deletePropertyById;
