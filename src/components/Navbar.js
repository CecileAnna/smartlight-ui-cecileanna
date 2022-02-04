import { Link } from "react-router-dom";
import LightZonesCards from "./LightZonesCards";
import BedroomImg from "../../media/light-zones_icons/bed";
import LivingroomImg from "../../media/light-zones_icons/room";
import KitchenImg from "../../media/light-zones_icons/kitchen";
import BathroomImg from "../../media/light-zones_icons/bathtub";
import OutdoorsImg from "../../media/light-zones_icons/house";
import BalconyImg from "../../media/light-zones_icons/balcony";

const Navbar = (props) => {
    return (
        
           <nav className="Navbar flex p-4 content-center justify-center gap-4">

               <LightZonesCards iconImg={<BedroomImg/>} headingTwoText="Bedroom" headingThreeText="4 Lights" headingThreeColor="font-yellow">

                    <Link to="/bedroom-lights">Bedroom Lights</Link>

                </LightZonesCards>

                <LightZonesCards iconImg={ <LivingroomImg/>} headingTwoText="Livingroom" headingThreeText="2 Lights" headingThreeColor="font-yellow">

                    <Link to="/livingroom-lights">Livingroom Lights</Link>

                </LightZonesCards>

                <LightZonesCards iconImg={ <KitchenImg/>} headingTwoText="Livingroom" headingThreeText="5 Lights" headingThreeColor="font-yellow">

                    <Link to="/kitchen-lights">Kitchen Lights</Link>

                </LightZonesCards>

                <LightZonesCards iconImg={ <BathroomImg/>} headingTwoText="Bathroom" headingThreeText="1 Lights" headingThreeColor="font-yellow">

                    <Link to="/bathroom-lights">Bathroom Lights</Link> 

                </LightZonesCards> 

                <LightZonesCards iconImg={ <OutdoorsImg/>} headingTwoText="Outdoors" headingThreeText="5 Lights" headingThreeColor="font-yellow">

                    <Link to="/outdoor-lights">Outdoor Lights</Link> 

                </LightZonesCards>  

                <LightZonesCards iconImg={ <BalconyImg/>} headingTwoText="Balcony" headingThreeText="1 Lights" headingThreeColor="font-yellow">

                    <Link to="/balcony-lights">Balcony Lights</Link>

                </LightZonesCards>    
        
           </nav> 

    );
};
export default Navbar;