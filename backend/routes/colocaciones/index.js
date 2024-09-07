const express = require("express");
const router = express.Router();

const path = require("path");

const { validateFile, validateFileExtension } = require("../../Utils/validateFiles");

const { process } = require("../../middlewares/multer.config");
const { getColumnNames } = require("../../Utils/getColumnNames");
const { parseCSV } = require("../../Utils/files/parseCSV");
const { deleteFile } = require("../../Utils/files/deleteFile");
const { insertColocacionesInDB } = require("../../Utils/insertColocacionesInDB");
const { TrucateTable } = require("../../Utils/trucateTable");
const { getDate } = require("../../Utils/getDate");
const { insertColocacionesLog } = require("../../Utils/insertColocacionLog");
const { arrayToString } = require("../../Utils/arrayToString");
const { getQuery } = require("../../database/query");

router.get("/", async (request, response) => {
	try {
		const colocacionesLog = await getQuery("SELECT * FROM colocaciones_log ORDER BY id DESC LIMIT 1")

		return response.json({colocacionesLog: colocacionesLog})
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
})

// POST colocaciones
router.post("/", process.single("process-file"), async (request, response) => {
	try {
		const startDate = getDate();

		const uploadedFile = request.file;

		validateFile(uploadedFile);
		validateFileExtension(uploadedFile);


		const filePath = path.join(__dirname, "../../process", uploadedFile.filename);
		const columns = await getColumnNames("colocaciones");


		const csvInfo = await parseCSV(filePath, columns);

		await deleteFile(filePath);

		await TrucateTable("colocaciones");

		await insertColocacionesInDB(csvInfo);

		const endDate = getDate();

		let csvLog = {
			nameFile: request.body.fileName,
			totalRows: csvInfo.totalRows - 1,
			correctRowsCount: csvInfo.correctRows.length == 0 ? csvInfo.correctRows.length - 0 : csvInfo.correctRows.length - 1,
			incorrectRowsCount: csvInfo.incorrectRows.length,
			incorrectRows: arrayToString(csvInfo.incorrectRows),
			errors: csvInfo.error.length,
			startDate: startDate,
			endDate: endDate,
		}


		await insertColocacionesLog(csvLog);

		return response.json({
			Status: "Success",
			message: "Archivo procesado correctamente",
			csvLog: csvLog,
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})

module.exports = router;