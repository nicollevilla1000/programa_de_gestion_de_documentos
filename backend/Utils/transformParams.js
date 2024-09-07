const transformQueryParams = (query) => {
    return Object.fromEntries(
        Object.entries(query).map(([key, value]) => [key, value === 'null' ? null : value])
    );
};

module.exports = { transformQueryParams };