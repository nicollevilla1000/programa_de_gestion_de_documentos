import { obtenerFechaActual } from "../../../utils/dateFunctions";
import { TextCard } from "../TextComponents";
import "./styles.css";


const fechaActual = obtenerFechaActual();

const DateCard = ({children=fechaActual}) => {
    return(
        <TextCard textAlign="end">{children}</TextCard>
    );
}

export { DateCard };