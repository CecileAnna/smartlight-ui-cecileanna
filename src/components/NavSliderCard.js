import HeadingThree from "../subcomponents/HeadingThree";

const NavSliderCard = () => {

    return ( 

        <div className={`flex rounded justify-center content-center p-5 gap-4 bg-${props.bgColor} text-${props.textColor}`}>

            {props.icon && <div>{props.icon}</div>}

            <HeadingThree text={props.text}/>

        </div>

     );
}
 
export default NavSliderCard;