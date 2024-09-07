const express = require("express");
const { connection } = require("../../database");

const { obtenerFechaHoraHoy } = require("../../DateFunctions/index");
const { getQuery } = require("../../database/query");
const { validateObjectValues } = require("../../Utils/validateObjectValues");
const { splitValue } = require("../../middlewares/multer.config");

const router = express.Router();

const pageSize = 6;

router.get("/", async (request, response) => {
	try {
        const page = parseInt(request.query.page, 10) || 1;
        const offset = (page - 1) * pageSize;

		const query = `
			SELECT * FROM graficas
			ORDER BY creationDate
			DESC LIMIT ${pageSize} OFFSET ${offset};
		`;

		const graphs = await getQuery(query)
        const formatedGraphs = graphs.map(graph => {
			const formattedValues = graph.graphValues
				.split(splitValue)
				.map(part => part.split(',').map(Number))

			return ({
				...graph,
				labels: graph.labels.split(splitValue),
				datasetLabel: graph.datasetLabel.split(splitValue),
				graphValues: formattedValues,
			})
		});


		const totalGraphs = await getQuery("SELECT COUNT(*) AS totalGraphs FROM graficas");

        const totalPages = Math.ceil(totalGraphs[0].totalGraphs / pageSize);


		return response.status(200).json({graphsData: {
			graphs: formatedGraphs,
			totalPages: totalPages,
			currentPage: page,
		}})
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});

router.delete("/", async (request, response) => {
	try {
		const { id } = request.body;

		const query = `DELETE FROM graficas WHERE id = ?`;

		connection.query(query, id, (err, results) => {
			if(err) {
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});

router.patch("/", async (request, response) => {
	try {
		const id = request.body.id;

		const fechaActual = obtenerFechaHoraHoy();

		const graphValues = {
			title: request.body.title,
			year: request.body.year,
			month: request.body.month,
			description: request.body.description,
			graphType: request.body.graphType,
			indexAxis: request.body.indexAxis,
			labels: request.body.labels.join(splitValue),
			datasetLabel: request.body.datasetLabel.join(splitValue),
			graphValues: request.body.graphValues.join(splitValue),
			creationDate: fechaActual,
		}

		validateObjectValues(graphValues)

        const setClause = Object.entries(graphValues)
            .map(([key, value]) => `${key} = ${typeof value === 'string' ? `'${value}'` : value}`)
            .join(", ");

		const query = `UPDATE graficas SET ${setClause} WHERE id = ${id}`

		await getQuery(query);

		return response.json({ Status: "Success", message: `Gráfica con id ${id} editada correctamente`})

	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});


module.exports = router;
