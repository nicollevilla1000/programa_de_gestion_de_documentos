const express = require("express");
const { getQuery } = require("../../database/query");
const { connection } = require("../../database");
const { validateObjectValues } = require("../../Utils/validateObjectValues");
const { validatePassword } = require("../../Utils/validatePassword");

const router = express.Router();
const bcrypt = require("bcrypt");


router.get("/", async (request, response) => {
	try {
		const query = "SELECT id, name, email FROM login";

		const users = await getQuery(query)

		return response.json({users: users})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});
router.delete("/", async (request, response) => {
	try {
		const id = request.body.id;

		const query = `DELETE FROM login WHERE id = ?`;

		connection.query(query, id, (err, results) => {
			if(err) {
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success", message: "Usuario eliminado correctamente" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

const salt = 10;
router.patch("/", async (request, response) => {
	try {
		const id = request.body.id;

		validateObjectValues(request.body);
		validatePassword(request.body.password, request.body.confirmPassword)

		const query = `
			UPDATE login
			SET name=?, email=?, password=?
			WHERE id = ?
		`;

		bcrypt.hash(request.body.password.toString(), salt, (err, hash) => {
			if (err) { return response.json({Error: "Error hashing password"}); }

			const values = [
				request.body.name,
				request.body.email,
				hash,
				id,
			]

			connection.query(query, [...values], (err, result) => {
				if(err) { return response.json({Error: "Error editando el usuario"}) }

				return response.json({Status: "Success", message: "Usuario editado correctamente"});
			});
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

module.exports = router;