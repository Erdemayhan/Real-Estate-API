const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertiesByTypeId = ({ typeId }) => submitQuery`
    SELECT *
    FROM properties
    WHERE property_type_id = ${typeId}
    `;
module.exports = camelKeys(selectPropertiesByTypeId);
