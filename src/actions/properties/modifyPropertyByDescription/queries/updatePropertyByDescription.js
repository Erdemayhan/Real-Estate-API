const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updatePropertyByDescription = ({ propertyId, description = null }) => {
  const updates = [];

  if (description !== null) {
    updates.push(sql`description = ${description}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
        UPDATE
        properties
      SET
        ${updates.reduce(sqlReduce)}
      WHERE
        property_id = ${propertyId};
        `;
  }
  return Promise.resolve();
};

module.exports = updatePropertyByDescription;
