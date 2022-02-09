import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { motion } from "framer-motion";

import BedroomLights from "./pages/bedroom-lights";
import LivingroomLights from "./pages/livingroom-ligths";
import KitchenLights from "./pages/kitchen-lights";
import BathroomLights from "./pages/bathroom-lights";
import OutdoorLights from "./pages/outdoor-lights";
import BalconyLights from "./pages/balcony-lights";

// import Header from "./templates/Header";
// import NavbarMain from "./templates/NavbarMain";
import NavbarBottom from "./components/NavbarBottom";
// import Home from "./pages/home";
// import MainContentWrapper from "./subcomponents/MainContentWrapper";
import MainContent from "./subcomponents/MainContent";
import ErrorBoundary from "./ErrorBoundary";


function App() {

  return (

      <BrowserRouter>

        <div className="App bg-main-blue">

            <Routes>

              <Route path="/" element={
                
                <ErrorBoundary>

                  <MainContent/>
                  
                </ErrorBoundary>
              
              }/>


              <Route path="/bedroom-lights" element={<BedroomLights/>}/>
              <Route path="/livingroom-lights" element={<LivingroomLights/>}/>
              <Route path="/kitchen-lights" element={<KitchenLights/>}/>
              <Route path="/bathroom-lights" element={<BathroomLights/>}/>
              <Route path="/outdoor-lights" element={<OutdoorLights/>}/>
              <Route path="/balcony-lights" element={<BalconyLights/>}/>

            </Routes>

          <NavbarBottom/>

        </div>
      
      </BrowserRouter>

  );
}

export default App;
