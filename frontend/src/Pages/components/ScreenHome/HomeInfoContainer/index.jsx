import React from "react";
import { AppContext } from "../../../../Context";
import { TableContainer } from "../../TableContainer";

import { handleDownloadFile, handleOpen } from "../../../../utils/downloadFile";
import { formatTableData } from "../../../../utils/formatTableData";
import { WrapperContainer2 } from "../../WrapperContainers";
import { HomeSlider } from "../HomeSlider";


const HomeInfoContainer = ({data}) => {
    const context = React.useContext(AppContext);

    const subFolders = formatTableData(data, "Home");
    const subFoldersName = Object.keys(subFolders) || [];

    return(
        <WrapperContainer2 flexDirection="column" padding={0} gap={30}>
            <HomeSlider/>

            {subFoldersName?.map((item, index) => (
                <TableContainer
                    key={index}
                    title={item} 
                    values={subFolders[item]}
                    onOpen={handleOpen}
                    onExcel={context.handleExcelFile}
                    onDownload={handleDownloadFile}
                    onDelete={context.deleteFile}
                />
        ))}

        </WrapperContainer2>
        
    );
}

export { HomeInfoContainer };