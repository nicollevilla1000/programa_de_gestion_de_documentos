const multer = require('multer')
const mimeTypes = require("mime-types")
const moment = require("moment");

//Multer config
let splitValue = "_$$_";

let uploadStorage = multer.diskStorage({
    destination: (request, file, callback) => {
		const { mainFolder, subFolder } = request.body;

        callback(null, `./uploads/${mainFolder}/${subFolder}`);
    },
    filename: (request, file, callback) => {
		const { mainFolder, subFolder, year, month } = request.body;

		const filePublicationDate = moment().format("YYYY-MM-DD&HH-mm-ss");

		const nameArray = [mainFolder, subFolder, year, month, filePublicationDate, file.originalname];
		const nameFile = nameArray.join(splitValue);


		let formatName =`${nameFile}.${mimeTypes.extension(file.mimetype)}`;

		callback(null, formatName);
    }
});

let processStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, `./process`);
    },
    filename: (request, file, callback) => {
		const filePublicationDate = moment().format("YYYY-MM-DD&HH-mm-ss");

		const nameArray = [filePublicationDate, file.originalname];
		const nameFile = nameArray.join(splitValue);

		let formatName =`${nameFile}.${mimeTypes.extension(file.mimetype)}`;

		request.body.fileName = file.originalname;

		callback(null, formatName);
    }
})

let upload = multer({
	storage: uploadStorage,
});

let process = multer({
	storage: processStorage,
});

module.exports = { upload, process, splitValue };