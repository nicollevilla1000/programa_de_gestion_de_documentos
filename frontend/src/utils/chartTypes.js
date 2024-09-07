import { yearArray } from "./dateFunctions";

const chartTypes = [
    "bar", 
    "doughnut", 
    "pie", 
    "line", 
    "polarArea", 
    "radar", 
];

const graphLabels = {
    ofertasRegistradas: {
        indexAxis: "x",
        type: "line",
        array: yearArray.reverse(),
        name: "Ofertas de Empleo Registradas",
    },
    ramaDeActividad: {
        indexAxis: "y",
        type: "bar",
        array:["Información y comunicaciones", "Actividades profesionales, científicas y técnicas", "Actividades de servicios administrativos y de apoyo", "Industrias manufactureras", "Comercio al por mayor y al por menor; reparación de vehículos automotores y motocicletas"],
        name: "Demanda laboral por rama de actividad",
    },
    grupoOcupacional: {
        indexAxis: "y",
        type: "bar",
        array:["Oficiales, operarios, artesanos y oficios relacionados", "Técnicos y profesionales de nivel medio", "Profesionales, científicos e intelectuales", "Personal de apoyo administrativo", "Trabajadores de los servicios y vendedores de comercios y mercados"],
        name: "Demanda laboral por grupo ocupacional",
    },
    nivelEducativo: {
        indexAxis: "x",
        type: "bar",
        array: ["Primaria", "Secundaria", "Bachillerato", "Técnica", "Tecnológica", "Universitario"],
        name: "Demanda laboral por nivel educativo",
    },
    experiencia: {
        indexAxis: "x",
        type: "bar",
        array: ["Sin Experiencia", "1 a 6 Meses", "7 a 12 Meses", "13 a 24 Meses", "25 a 36 Meses", "37 a 60 Meses", "Mayor a 60 meses"],
        name: "Demanda laboral por experiencia requerida",
    },
    rangoSalarial: {
        indexAxis: "x",
        type: "bar",
        array: ["<=800000", "$800001 o $1000000", "$1000001 o $1500000", "$1500001 o $2000000", "$2000001 0 $3000000", "$3000001 o $4000000", "$4000001 o $6000000"],
        name: "Demanda laboral por rangos salariales",
    },
}

export { chartTypes, graphLabels };