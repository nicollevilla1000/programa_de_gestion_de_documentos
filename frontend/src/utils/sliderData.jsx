import { formatNumbers } from "./formatNumbers";
import { MdAccountBalance, MdConstruction } from "react-icons/md";
import { FaPaintbrush } from "react-icons/fa6"
import { GiMineWagon, GiSewingMachine } from "react-icons/gi";

const sliderData = [
    {
        name: "Actividades artísticas",
        icon: <FaPaintbrush />,
        numericValue: formatNumbers(18792),
        percentValue: "1%",
    },
    {
        name: "Actividades financieras",
        icon: <MdAccountBalance />,
        numericValue: formatNumbers(9375),
        percentValue: "19%",
    },
    {
        name: "Industrias manufactureras",
        icon: <GiSewingMachine  />,
        numericValue: formatNumbers(28693),
        percentValue: "-30%",
    },
    {
        name: "Construcción",
        icon: <MdConstruction  />,
        numericValue: formatNumbers(9435),
        percentValue: "-29%",
    },
    {
        name: "Explotación de minas y canteras",
        icon: <GiMineWagon />,
        numericValue: formatNumbers(1285),
        percentValue: "-36%",
    },
]

export { sliderData };