// import HeadingOne from "../subcomponents/HeadingOne";
import Bright from "../components/Bright";
import Color from "../components/Color";
import OnOff from "../components/OnOff";
import HeadingTwo from "../subcomponents/HeadingTwo";
import MainContentWrapper from "../subcomponents/MainContentWrapper";
import HeaderSettings from "../templates/HeaderSettings";

const BedroomLights = () => {
  return (
    <>
      <HeaderSettings arrowIcon="true" titleText="Bedroom" onZonePage="true" />

      <div className="bg-white rounded-full p-2 w-8 h-8 justify-center flex cursor-pointer">
        <OnOff />
      </div>

      <MainContentWrapper>
        <HeadingTwo text="Intensity" />
        <Bright />
        <HeadingTwo text="Colors" />
        <div className="color-circle-wrapper flex">
          <Color r="138" g="12" b="18" />
          <Color r="255" g="191" b="0" />
          <Color r="36" g="168" b="51" />
          <Color r="55" g="125" b="242" />
          <Color r="255" g="165" b="0" />
          <Color r="48" g="213" b="200" />
        </div>
        <HeadingTwo text="Scenes" />
        <div className="scene-cards-wrapper"></div>
      </MainContentWrapper>
    </>
  );
};

export default BedroomLights;
