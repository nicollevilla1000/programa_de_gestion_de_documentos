import React from "react";

import { WrapperContainer2 } from "../../WrapperContainers";
import { UploadForm } from "../UploadForm";
import { AppContext } from "../../../../Context";
import { AllInfoGridContainer } from "../../AllInfoContainer";

const UploadInfoContainer = () => {
    const context = React.useContext(AppContext);

    return(
        <WrapperContainer2 padding={0} flexDirection={context.windowWidth <= 1150 ? "column" : "row"}>
            <AllInfoGridContainer className="grid-1-1">
                <UploadForm/>

            </AllInfoGridContainer>
        </WrapperContainer2>
    );
}

export { UploadInfoContainer };