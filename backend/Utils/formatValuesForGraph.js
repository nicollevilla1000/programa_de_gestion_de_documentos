const formatValuesForGraph = (object) => {
    const labels = Object.keys(object);
    const datasetLabel = Object.keys(object[labels[0]]);

    const values = datasetLabel.map(year => {
        return labels.map(label => object[label][year]);
    });

    return { values, labels, datasetLabel };
}

module.exports =  { formatValuesForGraph };