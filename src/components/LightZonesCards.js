import HeadingTwo from '../subcomponents/HeadingTwo';
import HeadingThree from '../subcomponents/HeadingThree';

const LightZonesCards = (props) => {

    return ( 

        <div className="rounded flex-col justify-start content-between p-2">

            {props.iconImg && <div>{props.iconImg}</div>}

            <div className="flex-col content-between justify-start">

                <HeadingTwo text={props.headingTwoText}/>

                <HeadingThree text={props.headingThreeText} fontColor={props.headingThreeColor}/>

            </div>

        </div>

     );
}
 
export default LightZonesCards;