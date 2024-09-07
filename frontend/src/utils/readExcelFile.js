import * as XLSX from 'xlsx';

const readExcelFile = async (fileBlob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            
            resolve(json);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsArrayBuffer(fileBlob);
    });
};

export { readExcelFile }