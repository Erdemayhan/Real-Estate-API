const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertiesByStatusId = ({ statusId }) => submitQuery`
    SELECT property_statuses.property_status
    FROM properties
    JOIN property_statuses ON properties.property_status_id = property_statuses.property_status_id
    WHERE properties.property_status_id = ${statusId}

`;

module.exports = camelKeys(selectPropertiesByStatusId);

// SELECT property_types.property_type
// FROM properties
// JOIN property_types ON properties.property_type_id = property_types.property_type_id
// WHERE properties.property_type_id = ${statusId};
