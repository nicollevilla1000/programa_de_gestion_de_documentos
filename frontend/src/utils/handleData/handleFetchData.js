import { api } from "../api";

const fetchData = async (endpoint) => {
    const response = await fetch(`${api}/${endpoint}`, {
		mode: "cors",
		method: "GET"
	});
    const data = await response.json();

    if (data.Error) {
        throw new Error(data.Error)
    }

    if (response.status !== 200) {
        throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }

    return await data;
};

const fetchAllData = async (endpoints) => {
    const resultsArray = await Promise.all(
        endpoints.map(fetchData)
    );

    const combinedResults = resultsArray.reduce((acc, result) => {
        return { ...acc, ...result };
    }, {});

    return combinedResults;
};

export { fetchAllData };