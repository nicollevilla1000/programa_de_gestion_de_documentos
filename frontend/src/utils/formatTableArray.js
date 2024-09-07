import { months } from "./dateFunctions";

const formatTableArray = (array) => {
    const formattedData = array?.map((item) => ({
        array: [item?.name, `${months[item?.selectedMonth]} del ${item?.selectedYear}`, 'Abrir', 'Descargar'],
        file: item?.fullName,
        link: `file/${item?.mainFolder}/${item?.subFolder}/${item?.fullName}/${item?.name}`,
        fileType: item?.fileType, 
        folder: item?.mainFolder,
        subFolder: item?.subFolder,
        item: item,
    }));

    return formattedData.reverse();
} 

export { formatTableArray };