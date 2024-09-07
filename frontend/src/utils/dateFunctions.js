import { handleNotifications } from "./handleNotifications";

const generateYearRange = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }
    const reverseYears = years.reverse();
    return reverseYears;
};

const actualYear = new Date().getFullYear();
const actualMonth = new Date().getMonth() + 1;



const getMonthsUntilCurrent = (year) => {
    const monthsArray = {};

    if (year == actualYear) {
        for (let i = 1; i <= actualMonth; i++) {
            monthsArray[i] = months[i];
        }
        return monthsArray;
    } 
    // Si el año pasado es anterior al año actual
    else if (year < actualYear) {
        for (let i = 1; i <= 12; i++) {
            monthsArray[i] = months[i];
        }
        return monthsArray;
    } 
    
    else {
        handleNotifications("error", "Error configurando meses");
    }
}

const months = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
};


const obtenerFechaActual = () => {
    const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    const fechaCapitalizada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
  
    return fechaCapitalizada;
}

const yearArray = generateYearRange(2015, actualYear);
const monthsArray = Object.keys(getMonthsUntilCurrent(actualYear));

export { 
    yearArray, 
    months,
    actualYear,
    actualMonth,
    monthsArray,
    obtenerFechaActual,
    getMonthsUntilCurrent,
    generateYearRange
};