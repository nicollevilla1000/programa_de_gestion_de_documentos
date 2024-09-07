const sql = require("mssql");
var mysql = require('mysql');


const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');

// BUE
// const sqlConfig = {
// 	user: `${properties.get('app.database.user')}`,
// 	password: `${properties.get('app.database.password')}`,
// 	database: `${properties.get('app.database.database')}`,
// 	server: `${properties.get('app.database.server')}`,
// 	pool: {
// 		max: 10,
// 		min: 0,
// 		idleTimeoutMillis: 30000
// 	},
// 	options: {
// 		trustServerCertificate: true,
// 		encrypt: false
// 	}
// }

// sql.connect(sqlConfig, (err) => {
// 	if (err) {
// 		console.error('Error al conectar a la base de datos MSSQL:', err);
// 		return;
// 	} else {
// 		console.log('Conexión a la base de datos exitosa');
// 	}
// });


// Data Empleo
var connection = mysql.createConnection({
    host     : `${properties.get('app.database.server')}`,
    user     : `${properties.get('app.database.user')}`,
    password : `${properties.get('app.database.password')}`,
    database: `${properties.get('app.database.database')}`,
	port: properties.get('app.database.port'),
});



connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Conexión a la base de datos exitosa")
});


module.exports = { sql, connection };