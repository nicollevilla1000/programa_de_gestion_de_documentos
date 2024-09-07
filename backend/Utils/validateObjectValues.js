const validateObjectValues = (values, message="No pueden haber campos vacios") => {
	try {
		const arrayValues = Object.values(values);
		const filterConditions = arrayValues.some((key) => key === null || key == "");

		if (filterConditions) {
			throw new Error(message)
		}
	} catch (err) {
		throw new Error(err);
	}

}

module.exports = { validateObjectValues };