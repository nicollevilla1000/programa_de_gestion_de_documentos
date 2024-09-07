import { handleDeleteData } from "../../../../utils/handleData/handleDeleteData";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { EditDeleteCard } from "../../EditDeleteCard";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { AppContext } from "../../../../Context";
import { handleNotifications } from "../../../../utils/handleNotifications";
import React from "react";

const UsersCard = ({item}) => {
    const context = React.useContext(AppContext)

    const handleEditUser = async (item) => {
        handleNotifications("info", `Editando al usuario ${item.name}`)
        context.setUsers(item);
    }
    const handleDeleteUser = async () => {
        context.setLoading(true);
        await handleDeleteData(item, "/users")
        context.setLoading(false);
    }

    return(
        <WrapperContainer1 padding={0}>
            <AllInfoGridContainer className="grid-175-025" gap={10}>
                <WrapperContainer2 flexDirection="column" justifyContent="center" padding={20}>
                    <TextCard><SpanCard>Nombre: </SpanCard> {item?.name}</TextCard>
                    <TextCard><SpanCard>Correo: </SpanCard> {item?.email}</TextCard>
                    <TextCard><SpanCard>ID: </SpanCard> {item?.id}</TextCard>
                </WrapperContainer2>

                <EditDeleteCard item={item} onDelete={handleDeleteUser} onEdit={() => handleEditUser(item)}/>
            </AllInfoGridContainer>
        </WrapperContainer1>
    );
}

export { UsersCard }