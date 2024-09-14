const PizZip = require("pizzip");
const { loadDocx } = require("./loadDocx");

const replaceInDoc = async (buffer, replacements) => {
	const zip = new PizZip(buffer);

	const doc = await loadDocx(zip);

	doc.render(replacements);

	const buf = doc.getZip().generate({
		type: "nodebuffer",
		compression: "DEFLATE",
	});

	return buf;
}

module.exports = { replaceInDoc };