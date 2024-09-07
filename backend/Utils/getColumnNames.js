const { getQuery } = require("../database/query");

const getColumnNames = async (tableName="colocaciones", except=["id"]) => {
	const columns = await getQuery(`SHOW COLUMNS FROM ${tableName}`);
	const formatedColumns = columns.map(row => row.Field).filter(column => !except.includes(column));

	return formatedColumns;
}

module.exports = { getColumnNames };