import React from "react";

import { AppContext } from "../../../Context";

import { SubTitle } from "../../components/SubTitle";
import { Title } from "../../components/Title";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { handleInputChange } from "../../../utils/handleInputChange";
import { InputCard } from "../../components/InputsCards";
import { handlePostData } from "../../../utils/handleData/handlePostData";
import { handleNotifications } from "../../../utils/handleNotifications";

const RegisterScreen = () => {
    const context = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
    })

    const handleRegister = async (event) => {
        event.preventDefault();

        context.setLoading(true);
        await handlePostData(event, values, "/user/register");
        
        context.setLoading(false);
    }

    return(
		<AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <Title>
                    Registrar Nuevo Usuario Administrador
                </Title>
                
                <div className="login-container shadow-style border-left-style">
                    <SubTitle
                        textAlign="center"
                    >
                        Registro
                    </SubTitle>

                    <form className="login-form-container" onSubmit={handleRegister}>
                        <InputCard
                            id={"name"}
                            label={"Name:"}
                            placeholder="Ingrese su nombre"
                            onChange={(event) => handleInputChange("name", event, setValues)}
                            defaultValue={values?.name}
                            className="input2-card-container"
                        />
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
                        <InputCard
                            type="password"
                            id={"confirm-password"}
                            label={"Confirmar Contraseña:"}
                            placeholder="Ingrese su contraseña"
                            onChange={(event) => handleInputChange("confirmPassword", event, setValues)}
                            defaultValue={values?.confirmPassword}
                            className="input2-card-container"
                        />
                        
                        <button type="submit">Guardar Usuario</button>
                    </form>
                </div>
            </IsAuthWrapper>
		</AuthWrapper>
    );
}

export { RegisterScreen }