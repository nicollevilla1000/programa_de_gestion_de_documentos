import React from "react";

import { AppContext } from "../../../../Context";

import { WrapperContainer1 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { UploadFileCard } from "../../InputsCards";
import { ButtonCard } from "../../ButtonCard";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { handlePostFile } from "../../../../utils/handleData/handlePostData";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { validateFile } from "../../../../utils/validate/validateFiles";


import "./styles.css";


const UploadForm = () => {
    const context = React.useContext(AppContext)

    const [values, setValues] = React.useState({
        files: null,
    });

    const handleFileUpload = async (event) => {
        try {
            context.setLoading(true);
            
            event.preventDefault();

            validateFile(values?.files);
    
            const formData = new FormData();

            for (let i = 0; i < values.files.length; i++) {
                formData.append('file', values.files[i]);
            }
    
            await handlePostFile(event, formData, "/file/upload");
        } 
        catch (err) {
            return handleNotifications("error", err.message);
        } 
        finally {
            context.setLoading(false);
        }
    };

    
    return(
        <WrapperContainer1 padding={30} gap={15}>
            <form encType="multipart/form-data" className="upload-form-container" onSubmit={handleFileUpload}>
                <SubTitle>
                    Por favor seleccione un archivo
                </SubTitle>

                <UploadFileCard
                    id={"file"}
                    onChange={(event) => handleFileChange(event, ['.xlsx', '.pdf'], setValues)}
                    filesArray={values?.files}
                />

                <ButtonCard 
                    title="Guardar y Publicar Archivo"
                    type="submit"
                >
                    Guardar y Publicar Archivo
                </ButtonCard>
            </form>
        </WrapperContainer1>
    )
}

export { UploadForm };