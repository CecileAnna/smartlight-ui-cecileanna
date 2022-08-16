import HeadingOne from "../subcomponents/HeadingOne";

const Header = (props) => {
  return (
    <div className="flex justify-between content-center bg-main-blue w-full h-full p-4">
      <div className="flex flex-wrap gap-2 w-4">
        <HeadingOne text={props.titleText} />
      </div>
    </div>
  );
};

export default Header;
