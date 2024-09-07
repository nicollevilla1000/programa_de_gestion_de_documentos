import { getMonthsUntilCurrent, yearArray } from "../../../utils/dateFunctions";
import { handleInputChange } from "../../../utils/handleInputChange";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { OptionInputCard } from "../InputsCards";

const YearAndMonthFilterCard = ({state={}, setState, id, className="grid-1-1", year=true, month=true}) => {

    const monthsArray = Object.keys(getMonthsUntilCurrent(state?.year));

    return(
        <AllInfoGridContainer className={`${className} ${!(year && month) && "grid-1"}`}>
            {year && 
                <OptionInputCard 
                    id={`${id}-year`} 
                    label={"Año"} 
                    array={yearArray}
                    onChange={(event) => handleInputChange("year", event, setState)}
                    defaultValue={state?.year}
                />
            }

            {month &&
                <OptionInputCard 
                    id={`${id}-month`} 
                    label={"Mes"} 
                    array={monthsArray}
                    onChange={(event) => handleInputChange("month", event, setState)}
                    defaultValue={state?.month}
                />
            }
        </AllInfoGridContainer>
    );
}

export { YearAndMonthFilterCard };