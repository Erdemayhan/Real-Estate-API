const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updatePropertyStatusByStatusId = ({ propertyId, statusId = null }) => {
  const updates = [];

  if (statusId !== null) {
    updates.push(sql`property_status_id = ${statusId}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
    UPDATE 
    properties
    SET
    ${updates.reduce(sqlReduce)}
    WHERE
    property_id = ${propertyId};
    
    SELECT 
    properties.property_status_id, 
    property_statuses.property_status
    FROM 
    properties
    JOIN 
    property_statuses ON properties.property_status_id = property_statuses.property_status_id
    WHERE
    properties.property_id = ${propertyId};
`;
  }
  return Promise.resolve();
};

module.exports = updatePropertyStatusByStatusId;
