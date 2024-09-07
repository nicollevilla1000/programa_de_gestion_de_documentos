const validateTableLength = (values, state, setState) => {
    let filteredData = values && values?.filter(item => (item?.item?.selectedMonth == state.month) && (item?.item?.selectedYear == state.year));

    if (filteredData?.length > 0) { return filteredData }

    const availableMonthsForYear = values.reduce((acc, item) => {
        if (item?.item?.selectedYear == state.year && !acc.includes(item?.item?.selectedMonth)) {
            acc.push(item?.item?.selectedMonth);
        }
        return acc;
    }, []);

    if (availableMonthsForYear.length == 0) { return filteredData }

    const newMonth = availableMonthsForYear[0];
    setState({ ...state, month: newMonth })
    
    filteredData = values.filter(item =>
        item?.item?.selectedMonth == newMonth && 
        item?.item?.selectedYear == state.year
    );

    return filteredData;
}

export { validateTableLength };