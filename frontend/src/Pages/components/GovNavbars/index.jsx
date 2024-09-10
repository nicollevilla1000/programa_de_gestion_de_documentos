import { NavButtons } from "../NavButtons";

import "./styles.css";

const GovNavbar = () => {

    return(
        <nav className="barra-superior-govco" aria-label="Barra superior">
            <NavButtons/>
        </nav>
    );
}

export { GovNavbar }