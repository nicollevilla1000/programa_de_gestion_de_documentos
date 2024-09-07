const express = require("express");
const { connection } = require("../../database");

const { getQuery } = require("../../database/query");
const { obtenerFechaHoraHoy } = require("../../DateFunctions");
const { validateObjectValues } = require("../../Utils/validateObjectValues");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const query = "SELECT * FROM slider_data";
		const sliderData = await getQuery(query)

		return response.status(200).json({sliderData: sliderData})
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

router.post("/", async (request, response) => {

	try {
		const query = "INSERT INTO slider_data (`NOMBRE`,`SUBTITULO`,`VALOR`, `ICONO`, `FECHA_CREACION`) VALUES (?,?,?,?,?)";

		const fechaActual = obtenerFechaHoraHoy();

		const values = {
			NOMBRE: request.body.NOMBRE,
			SUBTITULO: request.body.SUBTITULO,
			VALOR: request.body.VALOR,
			ICONO: request.body.ICONO,
			FECHA_CREACION: fechaActual,
		}

		const arrayValues = Object.values(values);
		validateObjectValues(values)

		connection.query(query, arrayValues, (err, results) => {
			if(err) {
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success", message: "Datos guardados correctamente" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
})

router.delete("/", async (request, response) => {
	try {
		const id = request.body.id;

		const query = `DELETE FROM slider_data WHERE id = ?`;

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


module.exports = router;
