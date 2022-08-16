const MainContentWrapper = (props) => {
  return (
    <div className="flex-col rounded-t-3xl bg-main-grey w-full h-full p-10">
      {props.children}
    </div>
  );
};

export default MainContentWrapper;
