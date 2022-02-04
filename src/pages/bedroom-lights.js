import HeadingOne from "../subcomponents/HeadingOne";
import HeadingTwo from "../subcomponents/HeadingTwo";
import MainContentWrapper from "../subcomponents/MainContentWrapper";
import Header from "../templates/Header";

const BedroomLights = () => {
    
    return ( 

        <div className="bedroom-lights">

            <Header arrowIcon="true" titleText="Bedroom" onZonePage="true"/>

            <MainContentWrapper>

                <HeadingTwo text="Intensity"/>

                //slider

                <HeadingTwo text="Colors"/>

                <div className="color-circle-wrapper">



                </div>

                <HeadingTwo text="Scenes"/>

                <div className="scene-cards-wrapper">


                </div>

            </MainContentWrapper>


        </div>

     );
}
 
export default BedroomLights;