import Dropdown from 'react-bootstrap/Dropdown';
import { uriDropNav } from '../../../../utils/uriDropNav';

import "./styles.css";
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../../Context';
import React from 'react';
import { VerifyLength } from '../../VerifyLengthWrapper';

const DropNav = () => {
    const context = React.useContext(AppContext)

    const array = context.responseData?.folders;

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropnav-basic" className='dropnav-button'>
                Informacion Adicional
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropnav-grid-container">
                <div className='dropnav-anchor-container'>
                    <a href={uriDropNav["Buscador de Empleo"]} target="_blank" rel="noopener noreferrer"><IoIosArrowForward /> {Object.keys(uriDropNav)[0]}</a>
                </div>
                
                <VerifyLength array={array}>
                    {array?.filter(item => item != "Home").map((item, index) => (
                        <div key={index} className='dropnav-anchor-container'>
                            <Link to={`/category/${item.replace(/ /g, '_')}`}><IoIosArrowForward /> {item}</Link>
                        </div>
                    ))}
                </VerifyLength>
            </Dropdown.Menu>
        </Dropdown>  
    )
}

export { DropNav };