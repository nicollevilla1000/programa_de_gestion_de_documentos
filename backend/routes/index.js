const express = require("express");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


const userRouter = require("./user.router.js")
const usersRouter = require("./users")

const graphRouter = require("./graph/index.js")
const graphNewRouter = require("./graph/new.router.js")
const graphExportRouter = require("./graph/export.router.js")
const graphValuesRouter = require("./graph/values.router.js")


const sliderRouter = require("./slider")
const fileRouter = require("./file")

const colocacionesRouter = require("./colocaciones/index.js")

const columnsRouter = require("./columns/index.js")


const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${properties.get("app.api.structure")}/v1`, router);

	// Routes
	router.use("/user", userRouter);
	router.use("/users", usersRouter);

	router.use("/graph", graphRouter);
	router.use("/graph/new", graphNewRouter);
	router.use("/graph/export", graphExportRouter);
	router.use("/graph/values", graphValuesRouter);

	router.use("/slider", sliderRouter);

	router.use("/file", fileRouter);

	router.use("/colocaciones", colocacionesRouter);

	router.use("/columns", columnsRouter);
}

module.exports = routerApi;