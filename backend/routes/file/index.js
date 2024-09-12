const OpenAI = require('openai');

const express = require("express");

const router = express.Router();

const { upload } = require("../../middlewares/multer.config");

const { readFolder } = require("../../Utils/files/readFolder");
const { formatFile } = require("../../Utils/files/formatFile");
const { validateFile } = require("../../Utils/validateFiles");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


// Configuración de OpenAI
const openai = new OpenAI({
	apiKey: `${properties.get('app.gpt.key')}`,
  });


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


// POST file/upload
router.post("/upload", upload.array("file"), async (request, response) => {
	try {
		const uploadedFiles = request.files;

		validateFile(uploadedFiles);

		const stream = await openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [{ role: "user", content: "Say this is a test" }],
			stream: true,
		});
		for await (const chunk of stream) {
			console.log(chunk.choices[0].delta.content || "");
		}

		return response.json({Status: "Success", message: "Archivo cargado correctamente"});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
