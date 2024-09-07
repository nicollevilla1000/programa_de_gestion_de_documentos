const { getQuery } = require("../database/query");
const { formatDistinctToArray } = require("./formatDistincToArray");

const formatGraphValues = async (column, conditions, monthValue, yearValue) => {

	const columnValues = await formatDistinctToArray(column);

	const promises = columnValues.map(async (item) => {
		const query = `SELECT COUNT (*) AS '${yearValue}' FROM colocaciones WHERE ${column} = '${item}' ${conditions ? ` AND ${conditions}` : ""}`;
		const secondQuery = `SELECT COUNT (*) AS '${yearValue - 1}' FROM colocaciones WHERE ${column} = '${item}' AND anio_coloca = '${yearValue - 1}' AND mes_coloca = '${monthValue}'`;

		const [valuesCurrentYear] = await getQuery(query);
        const [valuesPreviousYear] = await getQuery(secondQuery);

		return {
            [item]: {
                [`${yearValue}`]: valuesCurrentYear[`${yearValue}`],
                [`${yearValue - 1}`]: valuesPreviousYear[`${yearValue - 1}`]
            }
        };
	})
	const values = await Promise.all(promises);

	const result = values.reduce((acc, row) => {
        const key = Object.keys(row)[0];
        acc[key] = row[key];
        return acc;
    }, {});

	return result;

}

module.exports = { formatGraphValues };