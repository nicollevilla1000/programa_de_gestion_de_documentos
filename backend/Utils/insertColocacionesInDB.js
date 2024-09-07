const { getQuery } = require("../database/query");

const insertColocacionesInDB = async (csvInfo) => {
	try {
		if (!(csvInfo.correctRows)) { return };

		const array = csvInfo.correctRows;

		const promises = array.map(async (item, index) => {
			if (index == 0) { return; }

			const keys = Object.keys(item.data).join(", ");
			const values = Object.values(item.data).map(item => typeof item === 'string' ? `'${item}'` : item).join(", ");

			await getQuery(`INSERT INTO colocaciones (${keys}) VALUES (${values})`);
		});

		await Promise.all(promises);
		return;
	}
	catch (err) {
		throw new Error(err);
	}


}

module.exports = { insertColocacionesInDB };