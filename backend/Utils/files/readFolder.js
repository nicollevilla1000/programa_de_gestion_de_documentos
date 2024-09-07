const fs = require("fs");

const readFolder = async (folder="") => {
	return new Promise((resolve, reject) => {
		fs.readdir(`uploads/${folder}`, (err, file) => {
			if (err) {
				reject(err);
			}

			resolve(file);
		});
	})
}

module.exports = { readFolder };