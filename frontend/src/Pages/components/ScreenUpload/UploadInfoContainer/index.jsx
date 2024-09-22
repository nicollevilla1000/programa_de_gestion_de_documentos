import React from "react";

import { CodeWrapper, WrapperContainer2 } from "../../WrapperContainers";
import { UploadForm } from "../UploadForm";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { ButtonCard } from "../../ButtonCard";
import { handleDownloadFile } from "../../../../utils/downloadFile";
import { TextAreaCard } from "../../InputsCards";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { SubTitle } from "../../SubTitle";
import { handlePostData } from "../../../../utils/handleData/handlePostData";

const UploadInfoContainer = () => {
    const [values, setValues] = React.useState({
        jsonValue: null,
    });

    return(
        <WrapperContainer2 padding={0} flexDirection={"column"}>
            <AllInfoGridContainer className="grid-1">
                {/* <UploadForm/> */}
                <ButtonCard onClick={() => {
                    handleDownloadFile("/file/output")
                }}>
                    Descargar ultimo archivo procesado
                </ButtonCard>
            </AllInfoGridContainer>

            <AllInfoGridContainer className="grid-075-125">
                <WrapperContainer2 flexDirection="column" justifyContent="start">
                    <ButtonCard onClick={async (event) => {
                        await handlePostData(event, values, "/file/json");
                    }}>
                        Enviar información
                    </ButtonCard>
                    <TextAreaCard
                        id={"json-input"}
                        label={"Inserte el codigo generado por GPT"}
                        placeholder="Inserte el texto"
                        onChange={(event) => {handleInputChange("jsonValue", event, setValues)}}
                    />
                </WrapperContainer2>
                <WrapperContainer2 flexDirection="column">
                    <SubTitle>Valores ingresados</SubTitle>
                    <AllInfoGridContainer className="grid-1" padding={0}>
                        <CodeWrapper json={values?.jsonValue || ""}/>
                    </AllInfoGridContainer>
                </WrapperContainer2>
            </AllInfoGridContainer>
        </WrapperContainer2>
    );
}

export { UploadInfoContainer };