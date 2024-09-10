import { Title } from "../../components/Title";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { UploadInfoContainer } from "../../components/ScreenUpload/UploadInfoContainer";
import { WrapperContainer1, WrapperContainer2 } from "../../components/WrapperContainers";
import { TextCard } from "../../components/TextComponents";

const UploadScreen = () => {
    return (
        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <Title>
                    Carga de Archivos para Publicación
                </Title>
                <UploadInfoContainer/>
                <WrapperContainer2 flexDirection="column">
                    <Title>
                        hola

                    </Title>
                    <TextCard>
                        ajajkamj
                    </TextCard>
                </WrapperContainer2>
                <WrapperContainer1 flexDirection="column" gap={0}>
                    <Title>
                        sapo
                    </Title>
                    <TextCard>
                        ajajkamj
                    </TextCard>
                    <TextCard>
                        ajajkamj
                    </TextCard>
                </WrapperContainer1>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UploadScreen };