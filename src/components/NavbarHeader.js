// import { Link } from "react-router-dom";
import LightOnIcon from "../subcomponents/LightOnIcon";
import DeskIcon from "../subcomponents/DeskIcon";
import BedIcon from "../subcomponents/BedIcon";
import NavSliderCard from "./NavSliderCard";

const NavbarHeader = () => {
    return ( 

        <nav className="flex">

            <NavSliderCard icon={ <LightOnIcon/>} text="Main Lights">

                {/* <Link></Link> */}

            </NavSliderCard>

            <NavSliderCard icon={ <DeskIcon/> } text="Desk Lights"/>

            <NavSliderCard icon={ <BedIcon/> } text="Bed Lights"/>


        </nav>

     );
}
 
export default NavbarHeader;