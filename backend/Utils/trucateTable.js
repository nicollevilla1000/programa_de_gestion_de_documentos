const { getQuery } = require("../database/query")

const TrucateTable = async (tableName) => {
	await getQuery(`TRUNCATE table ${tableName};`)
	return;
}

module.exports = { TrucateTable }