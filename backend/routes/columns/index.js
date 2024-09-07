const express = require("express");
const { getColumnNames } = require("../../Utils/getColumnNames");

const router = express.Router()

router.get("/filter", async (request, response) => {
	try {
		const filterColumns = await getColumnNames("colocaciones", ["id", "mes_letras_coloca", "mes_coloca", "anio_coloca", "Municipio, Colocados"])

		return response.json({filterColumns: filterColumns});
	}
	catch (err) {
		return response.status(500).json({ Error: err.message });
	}
})

module.exports = router;