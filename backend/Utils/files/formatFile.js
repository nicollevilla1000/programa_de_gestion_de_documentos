const iconv = require("iconv-lite");

const { formatDateFile } = require("./formatDateFile");


const { splitValue } = require("../../middlewares/multer.config");

const formatFile = async (data) => {
	try {
		const formattedData = data.filter(item => item !== "1_no-borrar.txt").map((item) => {

			const parts = item.split(`${splitValue}`);

			const mainFolder = parts[0];
			const subFolder = parts[1];
			const originalNameWithExtension = parts.slice(-1).join('_');

			const originalName = originalNameWithExtension.split('.')[0];
			const fileType = originalNameWithExtension.split('.')[2]

			const fileDate = parts[4];
			const [ date, time ] = formatDateFile(fileDate)

			const file = {
				name: iconv.decode(Buffer.from(originalName, 'binary'), 'utf-8'),
				date: date,
				time: time,
				fullName: item,
				fileType: fileType,
				selectedYear: parts[2],
				selectedMonth: parts[3],
				mainFolder: mainFolder,
				subFolder: subFolder,
			};

			return file;
		})

		return formattedData;
	}
	catch (err) {
		throw new Error(err);
	}
}

module.exports =  { formatFile };