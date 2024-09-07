const validateFiles = (file, option, secondOption) => {
    try {
        validateFile(file);
        validateFileOption(option);
        validateFileOption(secondOption);
        return;
    } catch (err) {
        throw new Error(err.message);
    }
}

const validateFile = (file) => {
    const message = "Por favor, seleccione un archivo";

    if (!file){
        throw new Error(message);
    }
    if (!(file.length !== 0)) {
        throw new Error(message);
    }
    return;
}

const validateFileOption = (option) => {
    const message = "Por favor, seleccione el lugar de publicación.";

    if (!option) {
        throw new Error(message);
    }
    if (!(option !== "")) {
        throw new Error(message);
    }
    return;
}

const validateFileExtension = (file) => {
	const extension = file.filename.split('.').pop();

    const message = `Por favor, cargue un archivo csv, no un archivo ${extension}.`;

    if (extension != "csv") {
        throw new Error(message);
    }
    return;
}

module.exports = { validateFiles, validateFile, validateFileOption, validateFileExtension };