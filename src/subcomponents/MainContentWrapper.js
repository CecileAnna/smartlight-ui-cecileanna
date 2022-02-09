const MainContentWrapper = (props) => {
    return ( 

        <div className="flex-col rounded-t-full bg-main-grey w-full h-full">

            {props.children}
                
        </div>

     );
}
 
export default MainContentWrapper;