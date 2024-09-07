import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import "./styles.css";

const PaginationButtons = ({state, setState, length}) => {

    const handleNextGraph = () => {
        setState((prevIndex) => (prevIndex + 1) % length);
    };

    const handlePreviousGraph = () => {
        setState((prevIndex) => (prevIndex - 1 + length) % length);
    };

    return(
        <div className="pagination-buttons-container">
            <button title="Gráfica anterior" onClick={handlePreviousGraph}>
                <IoIosArrowBack/>
            </button>
            <button title="Siguiente gráfica" onClick={handleNextGraph}>
                <MdNavigateNext/>
            </button>
        </div>
    );
}

export { PaginationButtons };