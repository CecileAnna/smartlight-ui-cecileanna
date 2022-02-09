import ArrowLeftIcon from '../subcomponents/ArrowLeftIcon';
import Lamp from '../media/lamp.png';
import ColorCircle from '../subcomponents/ColorCircle';
import HeadingOne from "../subcomponents/HeadingOne";

const Header = (props) => {

    return ( 

        <div className="flex justify-between content-center bg-main-blue w-full h-full p-4">

            
            <div className="flex flex-wrap gap-2 w-4">

                {props.arrowIcon && <ArrowLeftIcon/> }

                <HeadingOne text={props.titleText}/>

            </div>

            {props.onZonePage && 

                <div className="flex-col relative">

                    <Lamp className="z-10"/>

                    <ColorCircle className="z-0 absolute -inset-2" color={props.lampBulbColor}/>

                </div>

            }

        </div>

     );
}
 
export default Header;