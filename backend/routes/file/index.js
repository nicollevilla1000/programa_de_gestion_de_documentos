const OpenAI = require('openai');

const express = require("express");
const path = require('path');
const fs = require('fs');

const router = express.Router();

const { upload } = require("../../middlewares/multer.config");

const { validateFile } = require("../../Utils/validateFiles");

const PropertiesReader = require('properties-reader');
const { replacements } = require('../../Utils/replacements');
const { replaceInDoc } = require('../../Utils/docx/replacePlaceholders');
const properties = PropertiesReader('./app.properties.ini');


// Configuración de OpenAI
const openai = new OpenAI({
	apiKey: `${properties.get('app.gpt.key')}`,
});


router.get("/output", async (request, response) => {
	try {
		const outputPath = path.resolve(__dirname, '../../processed', 'output.docx');

		if (!(fs.existsSync(outputPath))) {
			return response.status(404).json({ Error: 'Archivo no encontrado' });
		}

		return response.sendFile(outputPath);
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


// POST file/upload
router.post("/upload", upload.array("file"), async (request, response) => {
	try {
		const uploadedFiles = request.files;

		validateFile(uploadedFiles);

		// const stream = await openai.chat.completions.create({
		// 	model: "gpt-4o-mini",
		// 	messages: [{ role: "user", content: "Say this is a test" }],
		// 	stream: true,
		// });
		// for await (const chunk of stream) {
		// 	console.log(chunk.choices[0].delta.content || "");
		// }

        const templateBuffer = fs.readFileSync(path.join(__dirname, '../../template', 'template.docx'));

		const outputBufffer = await replaceInDoc(templateBuffer, replacements);

        const outputPath = path.resolve(__dirname, '../../processed', 'output.docx');

        fs.writeFileSync(outputPath, outputBufffer);


		return response.json({Status: "Success", message: "Archivo procesado correctamente"});
	}
	catch (err) {
		console.log(err)
		return response.status(500).json({Error: err.message});
	}
})


module.exports = router;
