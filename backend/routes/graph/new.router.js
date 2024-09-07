const express = require("express");

const { obtenerFechaHoraHoy } = require("../../DateFunctions/index");
const { validateObjectValues } = require("../../Utils/validateObjectValues");
const { getQuery } = require("../../database/query");
const { splitValue } = require("../../middlewares/multer.config");

const router = express.Router();



router.post("/", async (request, response) => {
	try {
		const { body } = request;

		const fechaActual = obtenerFechaHoraHoy();

		const graphValues = {
			title: body.title,
			year: body.year,
			month: body.month,
			description: body.description,
			graphType: body.graphType,
			indexAxis: body.indexAxis,
			labels: body.labels.join(splitValue),
			datasetLabel: body.datasetLabel.join(splitValue),
			graphValues: body.graphValues.join(splitValue),
			creationDate: fechaActual,
		}

		validateObjectValues(graphValues)

		const keys = Object.keys(graphValues).join(", ");
		const values = Object.values(graphValues).map(item => typeof item === 'string' ? `'${item}'` : item).join(", ");

		await getQuery(`INSERT INTO graficas (${keys}) VALUES (${values})`);


		return response.json({ Status: "Success", message: "Grafica insertada correctamente"});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}

});


module.exports = router;
