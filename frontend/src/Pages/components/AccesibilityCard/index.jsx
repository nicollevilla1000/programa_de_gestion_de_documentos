import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { IoMdContrast } from "react-icons/io";

const AccesibilityCard = ({flexDirection = "column"}) => {
    const context = React.useContext(AppContext);

    let aumentos = 0;
    
    const aumentarTamanio = () => {
        if (aumentos < 5) {
            document.querySelectorAll('*').forEach(element => {
                const computedStyle = window.getComputedStyle(element);
                const fontSize = parseFloat(computedStyle.getPropertyValue('font-size'));
                element.style.fontSize = `${fontSize + 1}px`; // Aumentar el tamaño de la fuente en 1px
            });
            aumentos++;
        }
    };
    
    const disminuirTamanio = () => {
        if (aumentos > -4) {
            document.querySelectorAll('*').forEach(element => {
                const computedStyle = window.getComputedStyle(element);
                const fontSize = parseFloat(computedStyle.getPropertyValue('font-size'));
                element.style.fontSize = `${Math.max(fontSize - 1, 10)}px`; // Disminuir el tamaño de la fuente en 1px, con un mínimo de 10px
            });
            aumentos--;
        }
    };

    return(
        <div className="accesibility-icons-container">
            <div style={{
                flexDirection: flexDirection,
            }}>
                <button
                    title="Contraste"
                    onClick={() => {
                        context.setActiveHighContrast(!context.activeHighContrast);
                    }}
                >
                    <IoMdContrast/>
                </button>

                <button onClick={disminuirTamanio} title="Reducir Letra">
                    <MdTextDecrease/>
                </button>
                <button onClick={aumentarTamanio} title="Aumentar Letra">
                    <MdTextIncrease/>
                </button>
            </div>
        </div>
    );
}

export { AccesibilityCard };