import { ButtonCard } from "../ButtonCard";
import { WrapperContainer2 } from "../WrapperContainers";
import { MdEdit } from "react-icons/md";
import { DeleteButtonCard } from "./DeleteButtonCard";

const EditDeleteCard = ({item, onEdit, onDelete}) => {
    return(
        <WrapperContainer2 flexDirection="column" padding={20} justifyContent="center">
            <ButtonCard 
                title="Editar"
                onClick={() => onEdit(item)}
                padding={15}
            >
                <MdEdit />
            </ButtonCard>
            <DeleteButtonCard item={item} onDelete={onDelete}/>
        </WrapperContainer2>
    );
}

export { EditDeleteCard };