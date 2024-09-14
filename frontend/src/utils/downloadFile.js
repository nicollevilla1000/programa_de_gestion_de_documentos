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

const handleDownloadFile = async (uri) => {
    try {
        const file = await handleGetFile(uri)
        const url = window.URL.createObjectURL(file);
    
        handleDownload(url, "output.docx")
    } 
    catch (err) {
        handleNotifications("error", err.message);
    }
}

export { handleDownload, handleDownloadFile }