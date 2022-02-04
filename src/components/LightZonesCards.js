import HeadingTwo from '../subcomponents/HeadingTwo';
import HeadingThree from '../subcomponents/HeadingThree';

const LightZonesCards = (props) => {

    return ( 

        <div className="rounded flex-col justify-start content-between p-2">

            <img src={props.iconUrl} alt="Light Zones Icons" />

            <div className="flex-col content-between justify-start">

                <HeadingTwo text={props.headingOneText}/>

                <HeadingThree text={props.headingTwoText} fontColor={props.headingThreeColor}/>

            </div>

        </div>

     );
}
 
export default LightZonesCards;