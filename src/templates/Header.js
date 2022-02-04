import ArrowLeftIcon from '../subcomponents/ArrowLeftIcon';
import Lamp from '../../media/light-bulb';
import ColorCircle from '../subcomponents/ColorCircle'

const Header = (props) => {

    return ( 

        <div className="flex justify-between content-center bg-main-blue">

            <div className="flex gap-2">

                {props.arrowIcon && <ArrowLeftIcon/> }

                <HeadingOne text={props.titleText}/>

            </div>

            <div className="flex-col relative">

                <Lamp className="z-10"/>

                <ColorCircle className="z-0 absolute -inset-2" color={props.lampBulbColor}/>

            </div>

        </div>

     );
}
 
export default Header;