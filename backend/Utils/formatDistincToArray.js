const { getQuery } = require("../database/query");

const formatDistinctToArray = async (column) => {
	const columnValues = await getQuery(`SELECT DISTINCT ${column} AS value FROM colocaciones `);
	const formatedValues = columnValues.map(row => row.value).filter(value => value !== null);

	return formatedValues;
}

module.exports = { formatDistinctToArray };