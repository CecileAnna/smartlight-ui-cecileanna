import { BsLightbulbOff } from "react-icons/bs";
import { Link } from "react-router-dom";
import GearIcon from "../subcomponents/GearIcon";
import HouseIcon from "../subcomponents/HouseIcon";

const Navbar = () => {
    return (
        
           <nav className="Navbar flex p-4 content-center justify-center gap-4">

               <BsLightbulbOff className="text-xl"/>

                <Link to="/">

                    <HouseIcon className="text-xl"/>

                </Link> 

                <GearIcon className="text-xl"/>  
        
           </nav> 

    );
};
export default Navbar;