const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updatePropertyStatusById = ({
  propertyStatus = null,
  propertyStatusId
}) => {
  const updates = [];

  if (propertyStatus !== null) {
    updates.push(sql`property_status = ${propertyStatus}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
      UPDATE
      property_statuses
    SET
      ${updates.reduce(sqlReduce)}
    WHERE
      property_status_id = ${propertyStatusId};
      `;
  }
  return Promise.resolve();
};

module.exports = updatePropertyStatusById;
