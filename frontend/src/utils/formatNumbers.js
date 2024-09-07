const formatNumbers = (value="") => {
    const isInt = Number.isInteger(value);
    if(!isInt) { return ""; }


    const parts = value?.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let newNumber = parts.join(".");

    if (isInt && parts.length > 1) {
        newNumber = parts[0];
    }

    return newNumber;
}

export { formatNumbers };