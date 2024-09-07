import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer2, WrapperContainer3 } from "../../WrapperContainers";

import "./styles.css"

const InstructionCard = ({item={}, index=null}) => {
    return(
        <WrapperContainer2 flexDirection="column" justifyContent="center" alignItems="center" padding={22}>
            <WrapperContainer3 flexDirection="column" alignItems="center" justifyContent="center" padding={40} gap={30}>
                <SubTitle textAlign="start">({index + 1}) - {item.title}</SubTitle>

                <div className="instruction-icon-container">
                    {item.icon}
                </div>

                <WrapperContainer2 gap={5} padding={0} flexDirection="column">
                    {item?.instructions.map((item, index) => (
                        <TextCard key={index} textAlign="start"><SpanCard>Paso {index + 1}: </SpanCard>{item}</TextCard>
                    ))}
                </WrapperContainer2>


                <TextCard fontSize={12} textAlign="center" className="bold">Coloque el cursor encima para pausar</TextCard>
            </WrapperContainer3>
        </WrapperContainer2>
    );
}

export { InstructionCard }