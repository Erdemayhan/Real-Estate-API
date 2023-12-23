const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertiesByTypeId = ({ typeId }) => submitQuery`
    SELECT property_types.property_type
    FROM properties
    JOIN property_types ON properties.property_type_id = property_types.property_type_id
    WHERE properties.property_type_id = ${typeId};

`;

module.exports = camelKeys(selectPropertiesByTypeId);
