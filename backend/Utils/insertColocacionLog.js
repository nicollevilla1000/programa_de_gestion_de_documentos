const { getQuery } = require("../database/query");

const insertColocacionesLog = async (log) => {
	try {
		const keys = Object.keys(log).join(", ");
		const values = Object.values(log).map(item => typeof item === 'string' ? `'${item}'` :  item).join(", ");

		const query = `INSERT INTO colocaciones_log (${keys}) VALUES (${values})`;

		await getQuery(query);

		return;
	}
	catch (err) {
		throw new Error(err);
	}
}

module.exports = { insertColocacionesLog };