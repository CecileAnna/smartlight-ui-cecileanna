import PlusIcon from "./plusIcon";

const ColorCircle = (props) => {

    return ( 

        <div className="w-10 h-10 rounded-full" style= {`background-color: ${props.color}`}>

          {props.plusIcon && <PlusIcon/>}  
            
        </div>

     );
}
 
export default ColorCircle;