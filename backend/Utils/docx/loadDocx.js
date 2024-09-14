const Docxtemplater = require("docxtemplater");

const loadDocx = async (zip) => {
	const doc = new Docxtemplater(zip, {
		paragraphLoop: true,
		linebreaks: true,
		delimiters: { start: "{{", end: "}}" },
	});

	return doc;
}

module.exports = { loadDocx };