import ArrowLeftIcon from "../subcomponents/ArrowLeftIcon";
import Lamp from "../media/svg/Lamp.svg";
// import ColorCircle from "../subcomponents/ColorCircle";
import HeadingOne from "../subcomponents/HeadingOne";
import { motion } from "framer-motion";

const HeaderSettings = (props) => {
  return (
    <div className="flex justify-between content-center bg-main-blue w-full h-full p-4">
      <div className="flex items-center gap-2 w-4 text-white">
        <a href="/">
          <ArrowLeftIcon />
        </a>

        <HeadingOne text={props.titleText} />
      </div>

      <div className="flex-col relative">
        <motion.div animate={{ y: [-33, -4] }} transition={{ delay: 1.5 }}>
          <img className="transforms -translate-y-5" src={Lamp} alt="lamp" />
        </motion.div>

        {/* <ColorCircle
          className="z-0 absolute -inset-2"
          color={'rgb(255,165,0)'}
        /> */}
      </div>
    </div>
  );
};

export default HeaderSettings;
