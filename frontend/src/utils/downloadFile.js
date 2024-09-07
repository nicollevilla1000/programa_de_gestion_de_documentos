import { handleGetFile } from "./handleData/handleFiles";
import { handleNotifications } from "./handleNotifications";

const handleDownload = (url, name) => {
    const pdfUrl = url;
    const link = document.createElement("a");

    link.href = pdfUrl;
    link.download = name;
    link.click();
    handleNotifications("info", `Se descargó ${name}`);
}

const handleOpenFile = (uri) => {
    window.open(uri, '_blank');
}

const handleDownloadFile = async (item) => {
    try {
        const file = await handleGetFile(item.link)
        const url = window.URL.createObjectURL(file);
    
        handleDownload(url, item.array[0])
    } 
    catch (err) {
        handleNotifications("error", err.message);
    }
}

const handleOpen = async (item, onExcel) => {
    try {
        const file = await handleGetFile(item?.link)
        const url = window.URL.createObjectURL(file);

        const validateType = {
            "pdf": () => { handleOpenFile(url) },
            "xlsx": () => { onExcel(file, item) },
        }
        validateType[item?.fileType]();
        
    } 
    catch (err) {
        handleNotifications("error", err.message);
    }
}

export { handleDownload, handleOpenFile, handleDownloadFile, handleOpen }