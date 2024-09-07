import React from "react";
import { AppContext } from "../../../../Context";
import { handlePatchData } from "../../../../utils/handleData/handlePatchData";
import { WrapperContainer1 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { InputCard } from "../../InputsCards";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { ButtonCard } from "../../ButtonCard";
import { AllInfoGridContainer } from "../../AllInfoContainer";

const UsersForm = () => {
    const context = React.useContext(AppContext);

    const buttonsOptions = [
        {
            id: "name",
            label: "Nombre",
            state: "name",
        },
        {
            id: "password",
            label: "Contraseña",
            state: "password",
            type: "password"
        },
        {
            id: "confirm-password",
            label: "Confirmar Contraseña",
            state: "confirmPassword",
            type: "password"
        },
    ]

    const handleEditUsers = async (event) => {
        context.seLoading(true);
        event.preventDefault()
        const data = {...context.users}

        await handlePatchData(event, data, "/users");
        
        context.seLoading(false);
    }

    return(
        <form onSubmit={handleEditUsers}>
            <WrapperContainer1 flexDirection="column" padding={30}>
                <SubTitle>Editando a {context.users?.name}</SubTitle>

                {buttonsOptions?.map((item, index) => (
                    <InputCard
                        key={index}
                        className="input-container"
                        id={item?.id}
                        label={`${item?.label}:`}
                        placeholder={item?.label}
                        onChange={(event) => {handleInputChange(item?.state, event, context.setUsers)}}
                        type={item?.type}
                        defaultValue={context.users?.[item?.state]}
                    />
                ))}

                <AllInfoGridContainer className="grid-1-1">
                    <ButtonCard
                        title="Guardar Información"
                        type="submit"
                    >
                        Guardar Información
                    </ButtonCard>

                    <ButtonCard
                        title="Cancelar"
                        onClick={() => {context.setUsers(null)}}
                    >
                        Cancelar
                    </ButtonCard>

                </AllInfoGridContainer>

            </WrapperContainer1>
        </form>
    );
}

export { UsersForm };