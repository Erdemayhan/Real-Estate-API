const fetchResources = require("./fetchResourcePaginated");
const FILTERS = require("./fetchResourcePaginated/constants/filtersList");

const paginate = ({
  baseTable,
  basePath,
  selectFields,
  joinStatements = [],
  sortableAttributes = [],
  filterableAttributes = [],
  sortBy,
  groupBy = [],
  limit = 50,
  page = null,
  direction = "next",
  onRowReady,
  onPageResultsReady,
  filters,
  cursorValues,
  mandatoryFilter
}) => {
  return fetchResources({
    baseTable,
    selectFields,
    joinStatements,
    sortableAttributes,
    filterableAttributes,
    sortBy,
    groupBy,
    limit,
    page,
    direction,
    filters,
    cursorValues,
    basePath,
    onRowReady,
    onPageResultsReady,
    mandatoryFilter
  });
};

module.exports = { paginate, FILTERS };
