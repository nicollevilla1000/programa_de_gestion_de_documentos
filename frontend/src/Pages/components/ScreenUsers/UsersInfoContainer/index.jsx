import React from "react";
import { AppContext } from "../../../../Context";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { UsersForm } from "../UsersForm";
import { UsersGrid } from "../UsersGrid";

const UsersInfoContainer = () => {
    const context = React.useContext(AppContext)

    return(
        <AllInfoGridContainer>
            <UsersGrid/>
            {context.users && <UsersForm/>}
            
        </AllInfoGridContainer>
    );
}

export { UsersInfoContainer };