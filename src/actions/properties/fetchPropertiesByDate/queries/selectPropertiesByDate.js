const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPropertiesByDate = ({ date }) => submitQuery`
    SELECT 
        property_types.property_type,
        property_statuses.property_status,
        properties.location,
        properties.description,
        properties.no_of_rooms,
        properties.price
    FROM 
        properties
    JOIN 
        property_types ON properties.property_type_id = property_types.property_type_id
    JOIN 
        property_statuses ON properties.property_status_id = property_statuses.property_status_id
    WHERE 
        properties.listed_date = ${date}
    AND properties.property_status_id <> 3;


`;

module.exports = camelKeys(selectPropertiesByDate);
