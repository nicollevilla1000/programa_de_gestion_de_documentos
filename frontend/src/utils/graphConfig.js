const graphValuesConfig = (graph=[]) => {
    const values = {
        data: graph?.graphValues && graph?.graphValues,
        labels: graph?.labels && graph?.labels,
        datasetLabel: graph?.datasetLabel && graph?.datasetLabel,
        options: {
            indexAxis: graph?.indexAxis,
            type: graph?.graphType,
        }
    }

    return values;
}

export { graphValuesConfig };