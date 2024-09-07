const formatDateFile = (fullDateTime) => {
	const [date, time] = fullDateTime.split("&");

	const formattedDate = date.replace(/-/g, "/");
	const formattedTime = time.replace(/-/g, ":");

	return [formattedDate, formattedTime];
}

module.exports = {
	formatDateFile,
}