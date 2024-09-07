import { TbError404 } from "react-icons/tb";
import { WrapperContainer3 } from "../WrapperContainers";
import { TextCard } from "../TextComponents";
import { ButtonCard } from "../ButtonCard";
import { useNavigate } from "react-router-dom";

const NotFoundCard = () => {
    const navigate = useNavigate()

    return(
        <WrapperContainer3 padding={60} gap={30} flexDirection="column" justifyContent="center" alignItems="center">
            <TbError404 className="no-info-icon"/>
            <TextCard textAlign="center" fontSize={18}>Error 404, esta página no se encontró.</TextCard>
            
            <ButtonCard title="Volver al home" onClick={() => navigate("/home")}>Volver al home</ButtonCard>
        </WrapperContainer3>
    );
}

export { NotFoundCard }