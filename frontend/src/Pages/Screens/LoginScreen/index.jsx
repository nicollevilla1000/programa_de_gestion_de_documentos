import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import { SubTitle } from "../../components/SubTitle";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { handleNotifications } from "../../../utils/handleNotifications";
import { scrollToValue } from "../../../utils/scrollToValue";
import { InputCard } from "../../components/InputsCards";
import { handleInputChange } from "../../../utils/handleInputChange";


const LoginScreen = () => {
    const context = React.useContext(AppContext);

    React.useEffect(() => {
        scrollToValue()
    }, []);

    const [values, setValues] = React.useState({
        email: null,
        password: null,
    })

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    
    const handleSubmit = (event) => {
        context.setLoading(true);
        event.preventDefault();

        axios.post(`${context.apiUri}/user/login`, values)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    handleNotifications("success", data.message);
                    navigate("/home");
                } else {
                    handleNotifications("error", data.Error)
                }
                
                return;
            })
            .catch(err => { handleNotifications("error", err.message) })
            .finally(() => { context.setLoading(false); });
    }

    return(
        <div className="login-container shadow-style border-left-style">
            <SubTitle
                textAlign="center"
            >
                Iniciar Sesion
            </SubTitle>

            <form className="login-form-container" onSubmit={handleSubmit}>
                <InputCard
                    type="email"
                    id={"email"}
                    label={"Correo:"}
                    placeholder="Ingrese su correo"
                    onChange={(event) => handleInputChange("email", event, setValues)}
                    defaultValue={values?.email}
                    className="input2-card-container"
                />
                <InputCard
                    type="password"
                    id={"password"}
                    label={"Contraseña:"}
                    placeholder="Ingrese su contraseña"
                    onChange={(event) => handleInputChange("password", event, setValues)}
                    defaultValue={values?.password}
                    className="input2-card-container"
                />
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    );
}

export { LoginScreen }