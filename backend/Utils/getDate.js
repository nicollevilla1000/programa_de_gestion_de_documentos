const moment = require("moment");

const getDate = () => {
	const date = new Date();

	const actualDate = moment(date).format("DD/MM/YYYY hh:mm:ss");

	return(actualDate);
}

module.exports = { getDate }