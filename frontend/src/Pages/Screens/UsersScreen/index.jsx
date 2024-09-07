import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { UsersInfoContainer } from "../../components/ScreenUsers/UsersInfoContainer";
import { Title } from "../../components/Title";

const UsersScreen = () => {
    return(
        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <Title>Usuarios</Title>
                <UsersInfoContainer/>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UsersScreen };