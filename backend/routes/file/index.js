const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const { upload } = require("../../middlewares/multer.config");

const { validateFiles } = require("../../Utils/validateFiles");
const { readFolder } = require("../../Utils/files/readFolder");
const { formatFile } = require("../../Utils/files/formatFile");
const { deleteFile } = require("../../Utils/files/deleteFile");

// GET File
router.get('/', async (request, response) => {
	try {
		let files = {};

		const mainFolders = await readFolder();

		const promises = mainFolders.map(async (mainFolder) => {
			const subFolders = await readFolder(mainFolder);

			const secondaryPromises = subFolders.map(async (subFolder) => {
				const file = await readFolder(`${mainFolder}/${subFolder}`);

				const formattedFile = await formatFile(file);

				return {[subFolder]: formattedFile};
			})

			const secondResolved = await Promise.all(secondaryPromises);

			const subFolderFiles = secondResolved.reduce((acc, curr) => {
                const key = Object.keys(curr)[0];
                acc[key] = curr[key];
                return acc;
            }, {});

            return {[mainFolder]: subFolderFiles};
		})

		const resolved = await Promise.all(promises);


		resolved.forEach((item) => {
			const key = Object.keys(item)[0];
			files[key] = item[key];
		});

		return response.json({files: files})

	} catch (err) {
		return response.json({Error: err.message})
	}
});


// DELETE File
router.delete('/:folder/:subFolder/:file', async (request, response) => {
	try {
		const { folder, subFolder, file } = request.params;

		const pathToFile = `uploads/${folder}/${subFolder}/${file}`;

		await deleteFile(pathToFile);

		return response.json({Status: "Success", message: "Archivo eliminado correctamente"})

	} catch (err) {
		return response.json({Error: err.message})
	}
});


// GET File/folder/file/fileName
router.get('/:folder/:subFolder/:file/:fileName', async (request, response) => {
	try {
		const { folder, subFolder, file, fileName } = request.params;

		const fileUri = path.join(__dirname, "../../uploads", folder, subFolder, file)

		if (!fs.existsSync(fileUri)) {
			return response.status(404).json({ Error: 'Archivo no encontrado' });
		}

		return response.sendFile(fileUri, `${fileName}`)

	}
	catch (err) {
		return response.json({Error: err.message})
	}
});


// GET file/folders
router.get('/folders', async (request, response) => {
	try {
		const mainFolders = await readFolder();

		const promises = mainFolders.map(async (mainFolder) => {
			const subFolders = await readFolder(mainFolder);

            return {[mainFolder]: subFolders};
		})

		const resolved = await Promise.all(promises);

		let folders = {}

		resolved.forEach((item) => {
			const key = Object.keys(item)[0];
			folders[key] = item[key];
		});


		return response.json({folders: folders})

	} catch (err) {
		return response.json({Error: err.message})
	}
});


// POST file/upload
router.post("/upload", upload.array("file"), async (request, response) => {
	try {
		const uploadedFiles = request.files;

		const { mainFolder, subFolder } = request.body;

		validateFiles(uploadedFiles, mainFolder, subFolder);

		return response.json({Status: "Success", message: "Archivo guardado correctamente"})

	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
