const arrayToString = (array) => {
	if (array.length == 0) { return ""; }

	return array.map((item) => item.index).join(", ");
}

module.exports = { arrayToString };