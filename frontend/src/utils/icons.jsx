import { MdAccountBalance, MdConstruction } from "react-icons/md";
import { FaPaintbrush } from "react-icons/fa6"
import { GiMineWagon, GiSewingMachine } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";
import { FaBus } from "react-icons/fa";
import { RiMegaphoneFill, RiPagesLine  } from "react-icons/ri";
import { IoSchoolSharp } from "react-icons/io5";
import { FaIndustry } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate, FaRegCalendarCheck, FaMapMarkerAlt } from "react-icons/fa";
import { MdBackpack } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";
import { BsCloudCheck } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";

const icons = {
    "Actividades artísticas": <FaPaintbrush />,
    "Actividades financieras": <MdAccountBalance />,
    "Industrias manufactureras": <GiSewingMachine  />,
    "Construcción": <MdConstruction  />,
    "Minas y canterasación": <GiMineWagon /> ,
    "Tecnología": <MdComputer /> ,
    "Salud": <GiHealthNormal/>,
    "Turismo y Hoteleria": <ImAirplane/>,
    "Transporte": <FaBus />,
    "Marketing": <RiMegaphoneFill/>,
    "Educación": <IoSchoolSharp/>,
    "Industria": <FaIndustry/>,
    "Posgrado": <GiGraduateCap/>,
    "Universitario, tecnólogo o tecnológico": <FaUserGraduate/>,
    "Bachillerato": <MdBackpack/>,
    "Documento":  <MdOutlineUploadFile/>,
    "Calendario": <FaRegCalendarCheck/>,
    "Pagina": <RiPagesLine/>,
    "Check": <BsCloudCheck/>,
    "Ubicacion": <FaMapMarkerAlt/>,
    "Proceso": <VscServerProcess/>
}

export { icons };