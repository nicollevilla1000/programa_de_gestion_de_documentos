import { months } from "../../../../utils/dateFunctions";
import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";

import "./styles.css";

const MainTextContainer = ({item={}}) => {
    return(
        <WrapperContainer2
            flexDirection="column"
            padding={10}
            gap={20}
        >
            <SubTitle>{months[item?.month]} del {item?.year}</SubTitle>

            <TextCard>{item?.description || item?.DESCRIPCION}</TextCard>
        </WrapperContainer2>
    );
}
export { MainTextContainer };