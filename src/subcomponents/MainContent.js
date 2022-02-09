import { Link } from "react-router-dom";

import BedroomImg from "../media/light-zones_icons/bed.png";
import LivingroomImg from "../media/light-zones_icons/room.png";
import KitchenImg from "../media/light-zones_icons/kitchen.png";
import BathroomImg from "../media/light-zones_icons/bathtub.png";
import OutdoorsImg from "../media/light-zones_icons/house.png";
import BalconyImg from "../media/light-zones_icons/balcony.png";
// import MainContentWrapper from "./MainContentWrapper";

import Header from "../templates/Header";



const MainContent = () => {

    // if( id=1 ){
    //     throw new Error('Ups, something went wrong...')
    // }

    // throw new Error('Ups, something went wrong...')

    const rooms = [
        {
            id:1,
            img: BedroomImg,
            title: 'Bedroom',
            lights: '3',
            link: 'bedroom' 
        },

        {
            id:2,
            img: LivingroomImg,
            title: 'Livingroom',
            lights: '2',
            link: 'livingroom' 
        },
        {
            id:3,
            img: KitchenImg,
            title: 'Kitchen',
            lights: '5',
            link: 'kitchen' 
        },
        {
            id:4,
            img: BathroomImg,
            title: 'Bathroom',
            lights: '1',
            link: 'bathroom' 
        },
        {
            id:5,
            img: OutdoorsImg,
            title: 'Outdoor',
            lights: '5',
            link: 'outdoor' 
        },
        {
            id:6,
            img: BalconyImg,
            title: 'Balcony',
            lights: '2',
            link: 'balcony' 
        },
    ]



    return (
        
        <>

            <Header titleText="Control Panel"/>
        
            <div className="bg-main-grey rounded-t-xl w-full h-full">
                
                <h1 className=" py-4 text text-main-blue regal-y font-bold text-main pl-4 mt-4 ">All rooms </h1>

                <div className="grid grid-cols-2 w-full h-full justify-center content-center">

                {rooms.map((room) => (

                    <Link key={room.id} to={'room/' + room.link}>

                        <div
                        
                        style={{
        
                        width: '150px',
                        height: '150px',
                        paddingTop: '5px',
                        paddingLeft: '3px',
                        backgroundColor: 'white',
                        margin: '8px',
                        borderRadius: '18px',
                        cursor: 'pointer',
        
                        }}
                        >
                            <div className="pl-4 mt-4"><img src={room.img} width="51px" height="42px"></img></div>

                            <div className="text regal-blacktext font-bold text-main pl-4 mt-4">{room.title} </div>

                            <div className="text text-regal-yellowtext font-bold text-small pl-4 ">{room.lights} lights</div>

                        
                        </div>

                    </Link>

                ))}

                </div>
                
                                
            </div>

        </>
        
    )

}

export default MainContent;

