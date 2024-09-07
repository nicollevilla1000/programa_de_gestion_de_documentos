const csv = require("fast-csv");
const fs = require("fs");

const parseCSV = async (filePath, columns) => {
	try {
		return new Promise((resolve) => {
			const csvInfo = {
				totalRows: null,
				correctRows: [],
				incorrectRows: [],
				error: [],
			}

			let rowIndex = 1;

			fs.createReadStream(filePath)
				.pipe(csv.parse({ headers: columns, delimiter: ";", strictColumnHandling: true }))
				.on('error', (err) => {
					csvInfo.error.push(err);
				 })
				.on('data', (row) => {
					csvInfo.correctRows.push({data: row, index: rowIndex});
					rowIndex += 1;
				})
				.on('data-invalid', (row) => {
					csvInfo.incorrectRows.push({data: row, index: rowIndex});
					rowIndex += 1;
				})
				.on('end', (totalRows) => {
					csvInfo.totalRows = totalRows,

					resolve(csvInfo);
				});
		})
	}
	catch (err) {
		throw new Error(err.message)
	}
}

module.exports = { parseCSV };