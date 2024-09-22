const path = require('path');
const fs = require('fs');

const { replaceInDoc } = require("./docx/replacePlaceholders");

const createOutputFile = async (jsonValue) => {
	const templateBuffer = fs.readFileSync(path.join(__dirname, '../project_files', "template", 'template.docx'));

	const outputBufffer = await replaceInDoc(templateBuffer, jsonValue[0]);

	const outputPath = path.resolve(__dirname, '../project_files', "output", 'output.docx');

	fs.writeFileSync(outputPath, outputBufffer);
}

module.exports = { createOutputFile };