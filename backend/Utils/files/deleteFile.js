const fs = require("fs").promises;

const deleteFile = async (path) => {
	try {
		await fs.unlink(path);
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = { deleteFile };